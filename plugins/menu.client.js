export default ({ app, store }) => {
    // モバイルでナビゲーションをクリックしたとき
    app.router.afterEach(() => {
      if (store.state.menu.open) {
        setTimeout(() => store.commit('menu/close'), 10)
      }
    })
  }