function kmpSearch(H, N) {
  const ret = [];
  const pi = getPartialMatch(word);
  let begin = 0;
  let matched = 0;
  while (begin <= H.length - N.length) {
    if (matched < N.length && H[begin + matched] === N[matched]) {
      // 모두 일치했다면 답에 추가한다
      if (++matched === N.length) ret.push(begin);
    } else {
      // 한 글자도 일치하지 않으면 다음 시작 위치에서 탐색한다.
      if (matched === 0) begin++;
      else {
        begin += matched - pi[matched - 1];
        matched = pi[matched - 1];
      }
    }
  }
}

// 부분 일치 테이블 생성
function getPartialMatch(word) {
  const arr = new Array(word.length).fill(0);
  let begin = 1; // 접미사(뒤에 붙는 것)
  let matched = 0;
  while (begin + matched < word.length) {
    if (word[begin + matched] === word[matched]) {
      matched++;
      arr[begin + matched - 1] = matched;
    } else {
      if (matched === 0) begin++;
      else {
        begin += matched - arr[matched - 1];
        matched = arr[matched - 1];
      }
    }
  }
  console.log(arr);
}

kcmSearch("adkvejkvjkvaabaabaabaabacbac", "aabaabac");
