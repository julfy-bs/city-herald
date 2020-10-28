<template lang="pug">
  #app
    header
      Nav
      Header
      Tabs
    main.main-content
      .container.container--main
        .row__wrapper.row__wrapper--banner
          BannerFullWidth
        .row__wrapper
          .column__wrapper.main-column
            News(
              v-bind:newsItems="newsItems"
            )
          aside.column__wrapper.side-column
            ShortNews(
              v-bind:shortNewsItems="shortNewsItems"
            )
            PopularNews(
              v-bind:popularNewsItems="popularNewsItems"
            )
            AddNews
            BannerWidth300
        .row__wrapper
          Advertisement(
            v-bind:advertisements="advertisements"
          )

    footer
      Breadcrumbs
      Footer
</template>
<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import BannerFullWidth from "./components/BannerFullWidth";
import News from "./components/News";
import ShortNews from "./components/ShortNews/ShortNews";
import PopularNews from "./components/PopularNews/PopularNews";
import AddNews from "./components/AddNews/AddNews";
import BannerWidth300 from "./components/BannerWidth300/BannerWidth300";
import Advertisement from "./components/Advertisement/Advertisement";


export default {
  name: "app",
  data() {
    return {
      newsItems: [
        {
          id: 0,
          imageUrl: ('http://lorempixel.com/635/350'),
          tag: "Политика",
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10:00',
          date: '10.08.2020',
          recommendation: true,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
        },
        {
          id: 1,
          imageUrl: ('http://lorempixel.com/144/144'),
          tag: 'События в регионе',
          tagColor: '#f00f00',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10:00',
          date: '10.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
        },
        {
          id: 2,
          imageUrl: ('http://lorempixel.com/144/144'),
          tag: 'Культура',
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10:00',
          date: '10.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
        },
        {
          id: 3,
          imageUrl: ('http://lorempixel.com/144/144'),
          tag: 'Политика',
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10:00',
          date: '10.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
        },
        {
          id: 4,
          imageUrl: ('http://lorempixel.com/144/144'),
          tag: 'Политика',
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10:00',
          date: '10.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
        }
      ],
      shortNewsItems: [
        {
          id: 0,
          heading: 'Как освоить иностранный язык всего за несколько месяцев, Как освоить иностранный язык всего за несколько месяцев, Как освоить иностранный язык всего за несколько месяцев???',
          date: '11.08.2020',
          time: '15:37'
        },
        {
          id: 1,
          heading: 'Как освоить иностранный язык всего за несколько месяцев',
          date: '12.08.2020',
          time: '6:00'
        },
        {
          id: 2,
          heading: 'Как освоить иностранный язык всего за несколько месяцев',
          date: '13.08.2020',
          time: '19:20'
        },
        {
          id: 3,
          heading: 'Как освоить иностранный язык всего за несколько месяцев',
          date: '14.08.2020',
          time: '22:10'
        },
        {
          id: 4,
          heading: 'Как освоить иностранный язык всего за несколько месяцев',
          date: '15.08.2020',
          time: '10:40'
        }
      ],
      popularNewsItems: [
        {
          id: 0,
          imageUrl: ('http://lorempixel.com/300/200'),
          heading: 'Что происходит, когда протестующие массово нарушают правопорядок',
          recommendation: true,
        },
        {
          id: 1,
          imageUrl: ('http://lorempixel.com/300/200'),
          heading: 'Что должны знать наши земляки при путешествиях за кордон',
          recommendation: false,
        },
        {
          id: 2,
          imageUrl: ('http://lorempixel.com/300/200'),
          heading: 'Очень трогательный случай со студентами произошел на  нашем районе',
          recommendation: true,
        },
      ],
      advertisements: [
        {
          id: 0,
          imageUrl: ('http://lorempixel.com/100/100'),
          name: 'Андрей',
          text: 'Объявление',
        },
        {
          id: 1,
          imageUrl: ('http://lorempixel.com/100/100'),
          name: 'Андрей',
          text: 'Объявление',
        },
        {
          id: 2,
          imageUrl: ('http://lorempixel.com/100/100'),
          name: 'Андрей',
          text: 'Объявление',
        },
      ]
    }
  },
  components: {
    Advertisement,
    PopularNews,
    ShortNews,
    Nav,
    Header,
    Tabs,
    Breadcrumbs,
    Footer,
    BannerFullWidth,
    News,
    AddNews,
    BannerWidth300
  },
}
</script>

<style lang="postcss" src="./global.pcss"></style>
<style lang="postcss" scoped>
</style>
