function solution(bandage, health, attacks) {
    //마지막 공격 시간
    const lastAttackTime = attacks[attacks.length-1][0];
    //현재체력
    let currentHealth = health;
    //연속성공
    let success = 0;
    //attacks array index
    let attackIndex = 0;
    
    for(i=1; i<=lastAttackTime; i++){
        //공격있을때 현재체력 감소
        if (attackIndex < attacks.length && attacks[attackIndex][0] === i) {
            success = 0; // 초기화
            currentHealth -= attacks[attackIndex][1]; // 피해량만큼 감소
            ++attackIndex;
        } else { //공격없을때 연속성공 저장 및 초당 회복력 추가
            ++success;
            currentHealth = Math.min(health, currentHealth + bandage[1]);
            if(success === bandage[0]){
                success = 0; //초기화
                currentHealth = Math.min(health, currentHealth + bandage[2]);
            }
        }
        if (currentHealth <= 0) return -1;
    }
    
    return currentHealth;
}