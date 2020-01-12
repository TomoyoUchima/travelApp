<template>
<div>
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
var counter
var quetions
var countries

init()

function init () {
  counter = 0
  quetions = [
    'Q1.',
    'Q2.',
    'Q3.',
    'Q4.',
    'Q5.'
  ]
  countries = {
    'フィリピン': 0,
    'タイ': 0,
    'カンボジア': 0,
    'オーストラリア': 0,
    'アメリカ': 0,
    'イギリス': 0,
    'フランス': 0,
    'ドイツ': 0,
    'オランダ': 0,
    'デンマーク': 0,
    'ギリシャ': 0,
    'クロアチア': 0
  }
}

export default {
  name: 'testtop',
  data: () => ({
    choice: true,
    retry_btn: false,
    message: quetions[0]
  }),
  methods: {
    clickAnswer: function (answer) {
      addPoint(answer, counter)
      counter += 1
      if (counter > quetions.length - 1) {
        let maxCount = 0
        let maxCountry = ' '
        for (let country in countries) {
          if (maxCount < countries[country]) {
            maxCount = countries[country]
            maxCountry = country
          }
        }
        this.message = 'あなたには「' + maxCountry + '」がオススメです！'
        this.choice = false
        this.retry_btn = true
      } else {
        this.message = quetions[counter]
      }
    },
    retry: function () {
      init()
      this.message = quetions[counter]
      this.choice = true
      this.retry_btn = false
    }
  }
}

function addPoint (answer, counter) {
  switch (counter) {
    case 0:
      if (answer === 'Yes') {
        countries['フィリピン'] += 1
        countries['タイ'] += 1
        countries['カンボジア'] += 1
        countries['オーストラリア'] += 1
        countries['アメリカ'] += 1
        countries['イギリス'] += 1
        countries['ギリシャ'] += 1
      } else {
        countries['フランス'] += 1
        countries['ドイツ'] += 1
        countries['オランダ'] += 1
        countries['デンマーク'] += 1
        countries['ギリシャ'] += 1
        countries['クロアチア'] += 1
      }
      break
    case 1:
      if (answer === 'Yes') {
        countries['タイ'] += 1
        countries['オーストラリア'] += 1
        countries['ギリシャ'] += 1
        countries['デンマーク'] += 1
      } else {
        countries['フィリピン'] += 1
        countries['カンボジア'] += 1
        countries['フランス'] += 1
        countries['ドイツ'] += 1
        countries['オランダ'] += 1
        countries['クロアチア'] += 1
        countries['アメリカ'] += 1
        countries['イギリス'] += 1
      }
      break
    case 2:
      if (answer === 'Yes') {
        countries['ドイツ'] += 1
        countries['オランダ'] += 1
      } else {
        countries['カンボジア'] += 1
        countries['ギリシャ'] += 1
        countries['イギリス'] += 1
      }
      break
    case 3:
      if (answer === 'Yes') {
        countries['ドイツ'] += 1
        countries['オランダ'] += 1
        countries['デンマーク'] += 1
        countries['フランス'] += 1
        countries['フィリピン'] += 1
        countries['クロアチア'] += 1
        countries['アメリカ'] += 1
      } else {
        countries['タイ'] += 1
        countries['オーストラリア'] += 1
        countries['カンボジア'] += 1
        countries['ギリシャ'] += 1
        countries['イギリス'] += 1
      }
      break
    case 4:
      if (answer === 'Yes') {
        countries['ドイツ'] += 1
        countries['オランダ'] += 1
        countries['タイ'] += 1
        countries['フィリピン'] += 1
        countries['アメリカ'] += 1
      } else {
        countries['フランス'] += 1
        countries['デンマーク'] += 1
        countries['カンボジア'] += 1
        countries['ギリシャ'] += 1
        countries['イギリス'] += 1
      }
      break
    case 5:
      if (answer === 'Yes') {
        countries['クロアチア'] += 1
        countries['オランダ'] += 1
        countries['イギリス'] += 1
      } else {
      }
      break
  }
}
</script>
