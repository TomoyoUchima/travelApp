<template>
<div>

<router-link to="/test1"><button>診断する</button></router-link>

 <h2>{{ message }}</h2>

  <div id="choice" v-if="choice">
    <a href="#" class="square_btn yes" v-on:click="clickAnswer('Yes')">はい</a>
    <a href="#" class="square_btn no" v-on:click="clickAnswer('No')">いいえ</a>
  </div>
  <div id ="retry" v-if="retry_btn">
      <a href="#" class="square_btn yes" v-on:click="retry">リトライする</a>
  </div>


</div>
</template>

<script>

var counter;
var quetions;
var weapons;
init();

function init(){
  counter = 0;
  quetions = [
    "1.暑い国が好き",
    "2.旅といえば食だ",
    "3.予算が限られている",
    "4.冒険したい",
    "5.旅といえば酒だ"
  ];
    weapons= {
    'スプラシューターコラボ':0,
    'N-ZAP85':0,
    'ジェットスイーパーカスタム':0,
    'デュアルスイーパーカスタム':0,
    'スプラマニューバーコラボ':0,
    'スプラチャージャー':0,
    'ホットブラスターカスタム':0,
    'スプラローラー':0,
    'パブロ':0,
    'バケットスロッシャーデコ':0,
    'バレルスピナー':0,
    'パラシェルター':0
  }
}


export default {
  name: 'App',
   data: () => ({
    choice: true,
    retry_btn: false,
    message: quetions[0]
  }),
  methods: {
    clickAnswer: function (answer) {
      addPoint(answer,counter);
      counter += 1;
      if(counter > quetions.length-1){
        maxCount = 0
        maxWeapon = ""
        for(weapon in weapons) {
          if(maxCount < weapons[weapon]){
            maxCount = weapons[weapon];
            maxWeapon = weapon;
          }
        }
        this.message = "あなたには「" + maxWeapon + "」がオススメです！";
        this.choice = false;
        this.retry_btn = true;
      }else{
        this.message = quetions[counter];
      }
    },
    retry: function () {
      init();
      this.message = quetions[counter];
      this.choice = true;
      this.retry_btn = false;
    }
  }
}

function addPoint(answer,counter) {
  switch(counter){
    case 0:
      if(answer == 'Yes'){
        weapons['スプラシューターコラボ'] += 1;
        weapons['N-ZAP85'] += 1;
        weapons['ジェットスイーパーカスタム'] += 1;
        weapons['デュアルスイーパーカスタム'] += 1;
        weapons['スプラマニューバーコラボ'] += 1;
        weapons['スプラチャージャー'] += 1;
        weapons['バレルスピナー'] += 1;
      }else{
        weapons['ホットブラスターカスタム'] += 1;
        weapons['スプラローラー'] += 1;
        weapons['パブロ'] += 1;
        weapons['バケットスロッシャーデコ'] += 1;
        weapons['バレルスピナー'] += 1;
        weapons['パラシェルター'] += 1;
      }
      break;
    case 1:
      if(answer == 'Yes'){
        weapons['N-ZAP85'] += 1;
        weapons['デュアルスイーパーカスタム'] += 1;
        weapons['バレルスピナー'] += 1;
        weapons['バケットスロッシャーデコ'] += 1;
      }else{
        weapons['スプラシューターコラボ'] += 1;
        weapons['ジェットスイーパーカスタム'] += 1;
        weapons['ホットブラスターカスタム'] += 1;
        weapons['スプラローラー'] += 1;
        weapons['パブロ'] += 1;
        weapons['パラシェルター'] += 1;
        weapons['スプラマニューバーコラボ'] += 1;
        weapons['スプラチャージャー'] += 1;
      }
      break;
    case 2:
      if(answer == 'Yes'){
        weapons['スプラローラー'] += 1;
        weapons['パブロ'] += 1;
      }else{
        weapons['ジェットスイーパーカスタム'] += 1;
        weapons['バレルスピナー'] += 1;
        weapons['スプラチャージャー'] += 1;
      }
      break;
    case 3:
      if(answer == 'Yes'){
        weapons['スプラローラー'] += 1;
        weapons['パブロ'] += 1;
        weapons['バケットスロッシャーデコ'] += 1;
        weapons['ホットブラスターカスタム'] += 1;
        weapons['スプラシューターコラボ'] += 1;
        weapons['パラシェルター'] += 1;
        weapons['スプラマニューバーコラボ'] += 1;
      }else{
        weapons['N-ZAP85'] += 1;
        weapons['デュアルスイーパーカスタム'] += 1;
        weapons['ジェットスイーパーカスタム'] += 1;
        weapons['バレルスピナー'] += 1;
        weapons['スプラチャージャー'] += 1;
      }
      break;
    case 4:
      if(answer == 'Yes'){
        weapons['スプラローラー'] += 1;
        weapons['パブロ'] += 1;
        weapons['N-ZAP85'] += 1;
        weapons['スプラシューターコラボ'] += 1;
        weapons['スプラマニューバーコラボ'] += 1;
      }else{
        weapons['ホットブラスターカスタム'] += 1;
        weapons['バケットスロッシャーデコ'] += 1;
        weapons['ジェットスイーパーカスタム'] += 1;
        weapons['バレルスピナー'] += 1;
        weapons['スプラチャージャー'] += 1;
      }
      break;
    case 5:
      if(answer == 'Yes'){
        weapons['パラシェルター'] += 1;
        weapons['パブロ'] += 1;
        weapons['スプラチャージャー'] += 1;
      }else{
      }
      break;
  }
}



</script>

<style >

</style>


