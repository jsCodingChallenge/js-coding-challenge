// [프로그래머스] 로또의 최고 순위와 최저 순위
// [문제 원본](https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript)

function solution(lottos, win_nums) {
  // Filter out zero values of lottos
  const lottos_nonzero = lottos.filter(Number);
  // Count # zero values of lottos
  const num_zero = 6 - lottos_nonzero.length;
  // Check for duplicates between lottos_nonzero & win_nums
  const duplicates = win_nums.filter(num => lottos_nonzero.indexOf(num) != -1);
  // Get max and min tier based on num_zeros and duplicates
  const maxTier = num_zero + duplicates.length === 0 ? 6 : 7 - (num_zero + duplicates.length);
  const minTier = duplicates.length === 0 ? 6 : 7 - (duplicates.length);
  
  var answer = [maxTier, minTier];
  return answer;
}