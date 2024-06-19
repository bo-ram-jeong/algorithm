function solution(N, stages) {
    const failureRateArray = []; // 실패율 배열
    
    for(let i = 1; i <= N; i++){
        // 스테이지에 도달한 플레이어 수
        const challengerNum = (stages.filter((stage) => i <= stage)).length
        // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
        const noClearNum = (stages.filter((stage) => i === stage)).length
        
        const failureRate = challengerNum === 0 ? 0 : noClearNum / challengerNum;
        failureRateArray.push({'stageNum': i, 'failureRate': failureRate});
        
        // 실패율이 큰 순 즉, 내림차순으로 정렬하고 
        // 이때 실패율이 같을때 stageNum이 작은 순 즉, 오름차순으로 정렬.
        failureRateArray.sort((a, b) => {
            if (a.failureRate > b.failureRate) return -1;
            else if (a.failureRate < b.failureRate) return 1;
            else return a.stageNum - b.stageNum;
        })
    };
    
    // 정렬된 배열에서 스테이지 번호만 추출
    const answer = failureRateArray.map(item => item.stageNum);
    return answer;
}