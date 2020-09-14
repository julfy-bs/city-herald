import nav from "./Nav.vue";

export default {
    title: "nav",
    component: nav,
};

export const defaultView = () => ({
    components: { nav },
    template: `
    <nav
      title="Заголовок" 
    >
      <h1 slot="content">Содержание</h1>
    </nav>
  `,
});

defaultView.story = {
    name: "Стандартный вид"
}