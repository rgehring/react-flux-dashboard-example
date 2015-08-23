module.exports = {
  seed: function() {
    localStorage.setItem('listUsersSuccess', JSON.stringify([
      {
        id: 'u_1',
        name: 'cool_guy_1',
        pic_url: 'https://github.com/identicons/1337.png?s=50',
        email: 'cool_guy_1@us.redbullmediahouse.com',
        created_at: Date.now() - 99999
      },
      {
        id: 'u_2',
        name: 'cool_gal_1',
        pic_url: 'https://github.com/identicons/1337357.png?s=50',
        email: 'cool_gal_1@us.redbullmediahouse.com',
        created_at: Date.now() - 99999
      },
      {
        id: 'u_3',
        name: 'cool_guy_2',
        pic_url: 'https://github.com/identicons/13373R.png?s=50',
        email: 'cool_guy_2@us.redbullmediahouse.com',
        created_at: Date.now() - 99999
      }
    ]));
  }
};
