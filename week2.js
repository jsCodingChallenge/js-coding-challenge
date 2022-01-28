// [프로그래머스] 신고 결과 받기
// [문제 원본](https://programmers.co.kr/learn/courses/30/lessons/92334)

function solution(id_list, report, k) {
  let result = [];
  // Initialize result array with 0s, with length of how many ids are there in the list
  result = Array(id_list.length).fill(0);

  // Remove duplicate strings in report
  const unique_report = [...new Set(report)];

  // Get reporters and reportee by splitting report elements
  const reporters_and_reportee_pair = unique_report.map(p => p.split(' '));

  // Iterate through said pairs, create object with reportee as key and reporters array as value for easier counting
  const reportee_by_reporters = {};
  reporters_and_reportee_pair.map(pair => {
    const reporter = pair[0];
    const reportee = pair[1];
    if (reportee_by_reporters[reportee]) {
      reportee_by_reporters[reportee] = [...reportee_by_reporters[reportee], reporter];
    } else {
      reportee_by_reporters[reportee] = [reporter];
    }
  });

  // Iterate through reportee_by_reporters, fill result array if reportees list has >= k names 
  for (const [key, value] of Object.entries(reportee_by_reporters)) {
     if (value.length >= k) {
      const reporters = reportee_by_reporters[key];
      reporters.forEach(reporter => {
        const index = id_list.indexOf(reporter);
        result[index]++;
      });
    }
  }

  return result;
}