<template lang="pug">
  #app
    header
      Nav
      Header
      Tabs
    .main-content
      .container.container--main
        .row__wrapper.row__wrapper--banner
          BannerFullWidth
        .row__wrapper
          main.column__wrapper.main-column
            BreakingNews
            News(
              v-bind:newsItems="newsItems"

            )
          aside.column__wrapper.side-column

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
import BreakingNews from "./components/BreakingNews/BreakingNews";
import News from "./components/News";


export default {
  name: "app",
  data() {
    return {
      newsItems: [
        {
          id: 0,
          imageUrl: ('https://static.promopult.ru/uploads/library/img/google_img_1.png'),
          tag: "Политика",
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '10.08.2020',
          recommendation: true,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
          required: true
        },
        {
          id: 1,
          imageUrl: ('https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'),
          tag: 'События в регионе',
          tagColor: '#f00f00',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '11.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
          required: true
        },
        {
          id: 2,
          imageUrl: ('https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'),
          tag: 'Культура',
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '12.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
          required: true
        },
        {
          id: 3,
          imageUrl: ('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'),
          tag: 'Политика',
          tagColor: '#438573',
          heading: 'CNN: Дутерте просит Россскредите на вакцину от коо',
          time: '13.08.2020',
          recommendation: false,
          text: 'Президент Филиппин Родриго Дутерте ответствее что готов заплатить за российскую и китайскую вакцины от COVID-19, однако намереннтран рассрочку, сообщает CNN. При этом Дутерте душевно поблагодарил своии президента России Владимира Путина и лидера Китая Си Цзиньпина за',
          required: true
        }
      ]
    }
  },
  components: {
    BreakingNews,
    Nav, Header, Tabs, Breadcrumbs, Footer, BannerFullWidth, News
  },
}
</script>

<style lang="postcss" src="./global.pcss"></style>
<style lang="postcss" scoped>
</style>
