module.exports = {
  CREATE_SESSION_SUCCESS : {
    user: {
      id: 'u_1',
      name: 'cool_guy_1',
      pic_url: 'https://github.com/identicons/1337.png?s=50',
      email: 'cool_guy_1@us.redbullmediahouse.com',
      teams: [
        { 
          name: "Media Analytics", 
          id: "t_1",
          slug: "media_analytics"
        },
        {
          name: "Can-alytics", 
          id: "t_2",
          slug: "media_analytics"
        }
      ],
      created_at: Date.now() - 99999
    },
    secure_token: 'some_token_for_auth'
  }
};

