function solution(phone_book) {
  phone_book.sort(); //인접한 요소들 비교할 수 있도록 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    //현재 번호와 다음 번호 비교
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}