module.exports = {
  seed: function() {
    // list teams 
    localStorage.setItem('listTeamsSuccess', JSON.stringify([
      {
        id: 't_1',
        name: 'Media Analytics',
        slug: "media_analytics",
        description: 'Reporting for media analytics',
        created_at: Date.now() - 99999,
        report_summary: {
          meta: {
            total_hits: 2,
            page: 1,
            per_page: 10
          },
          results: [
            {
              id: 'r_1',
              slug: "global_media_kpis",
              title: "Global Media KPI's",
              description: 'Global media KPI reporting',
              github_url: 'https://github.com/rgehring/motivation_otd',
              created_at: Date.now()
            },
            {
              id: 'r_2',
              team_id: 't_1',
              slug: 'country_media_kpis',
              title: "Country Media KPI's",
              description: 'Country-level media KPI reporting',
              github_url: 'https://github.com/rgehring/motivation_otd',
              created_at: Date.now()
            }
          ]
        }
      },
      {
        id: 't_2',
        name: 'Can-alytics',
        slug: "can-alytics",
        description: 'Reporting for can analytics',
        created_at: Date.now() - 99999,
        report_summary: {
          meta: {
            total_hits: 2,
            page: 1,
            per_page: 10
          },
          results: [
            {
              id: 'r_3',
              slug: 'global_can_kpis',
              title: "Global Can KPI's",
              description: 'Global can KPI reporting',
              github_url: 'https://github.com/rgehring/motivation_otd',
              created_at: Date.now()
            }
          ]
        }
      }
    ]));
  }
};

