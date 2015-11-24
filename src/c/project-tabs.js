window.c.ProjectTabs = ((m, h) => {
    return {
        view: (ctrl, args) => {
            const project = args.project,
                rewards = args.rewardDetails;
            return m('.w-section.project-nav', [
                m('.w-container', [
                    m('.w-row', [
                        m('.w-col.w-col-9', [
                            !_.isEmpty(rewards()) ?
                                m('a[id="rewards-link"][class="w-hidden-main w-hidden-medium dashboard-nav-link mf ' + (h.hashMatch('#rewards') ? 'selected' : '') + '"][href="#rewards"]', {
                                    style: 'float: left;'
                                }, 'Recompensas') : m('a[id="rewards-link"][class="w-hidden-main w-hidden-medium dashboard-nav-link mf ' + (h.hashMatch('#contribution_suggestions') ? 'selected' : '') + '"][href="#contribution_suggestions"]', {
                                    style: 'float: left;'
                                }, 'Valores Sugeridos'),
                            m('a[id="about-link"][class="dashboard-nav-link mf ' + (h.hashMatch('#about') || h.hashMatch('') ? 'selected' : '') + ' "][href="#about"]', {
                                style: 'float: left;'
                            }, 'Sobre'),
                            m('a[id="posts-link"][class="dashboard-nav-link mf ' + (h.hashMatch('#posts') ? 'selected' : '') + '"][href="#posts"]', {
                                style: 'float: left;'
                            }, [
                                'Novidades ',
                                m('span.badge', project.posts_count)
                            ]),
                            m('a[id="contributions-link"][class="w-hidden-small w-hidden-tiny dashboard-nav-link mf ' + (h.hashMatch('#contributions') ? 'selected' : '') + '"][href="#contributions"]', {
                                style: 'float: left;'
                            }, [
                                'Apoios ',
                                m('span.badge.w-hidden-small.w-hidden-tiny', project.total_contributions)
                            ]),
                            m('a[id="comments-link"][class="dashboard-nav-link mf ' + (h.hashMatch('#comments') ? 'selected' : '') + '"][href="#comments"]', {
                                style: 'float: left;'
                            }, [
                                'Comentários ',
                                m('fb:comments-count[href="http://www.catarse.me/' + project.permalink + '"][class="badge project-fb-comment w-hidden-small w-hidden-tiny"][style="display: inline"]', m.trust('&nbsp;'))
                            ]),
                        ])
                    ])
                ])
            ]);
        }
    };
}(window.m, window.c.h));
