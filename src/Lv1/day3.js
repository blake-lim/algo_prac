function solution(number) {
    let answer = 0;

    //n개로 이루어진 정수 배열에서 3개를 뽑아서 더했을 때 0이 되는 경우의 수를 구하는 코드
    //수학적으로 표현하면 n개중에서 r개를 뽑는 경우의 수이다.
    //이 경우는 n개에서 3개를 뽑아서 더했을 때 0이 되는 경우를 구하면 된다.
    //조합은 순서가 상관이 없으므로 중복되는 값은 동일한 것으로 간주한다.
    //그래서 [-2, 3, 0, 2, -5] 일때 0,3,5나 5,3,0 이나 동일한 것으로 간주하기 때문에 배열을 한번 반복할때마다 + 1씩 해서
    //같은 조합이 나오지 않도록 했다.
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }
    return answer;
}
