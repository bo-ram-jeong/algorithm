function validateDot(string) {
    let result = '';
    let previousCharIsDot = false;

    for (let char of string) {
        if (char === '.') {
            if (!previousCharIsDot) {
                result += char;
                previousCharIsDot = true;
            }
        } else {
            result += char;
            previousCharIsDot = false;
        }
    }

    if (result.startsWith('.')) {
        result = result.slice(1);
    }
    if (result.endsWith('.')) {
        result = result.slice(0, -1);
    }

    return result;
}

function validateEmpty(string) {
    if (string === '') return 'a';
    return string;
}

function addString(string) {
    while (string.length < 3) {
        string += string[string.length - 1];
    }
    return string;
}

function solution(new_id) {
    const allowedString = ['-', '_', '.'];
    
    // 1단계: 소문자로 치환
    let lowerCaseStringArray = new_id.toLowerCase().split('');
    
    // 2단계: 허용되지 않는 문자 제거
    lowerCaseStringArray = lowerCaseStringArray.filter(char => {
        return allowedString.includes(char) || (!isNaN(char) && char !== ' ') || (char >= 'a' && char <= 'z');
    });
    
    // 3단계: 연속된 '.' 문자 제거
    let answer = validateDot(lowerCaseStringArray.join(''));
    
    // 4단계: 빈 문자열 체크
    answer = validateEmpty(answer);
    
    // 5단계: 길이 체크 (16자 이상일 경우 첫 15자만 남기고 제거, 마지막이 '.'일 경우 제거)
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        if (answer.endsWith('.')) {
            answer = answer.slice(0, -1);
        }
    }
    
    // 6단계: 길이가 2자 이하일 경우 길이가 3이 될 때까지 마지막 문자 반복
    if (answer.length <= 2) {
        answer = addString(answer);
    }
    
    return answer;
}