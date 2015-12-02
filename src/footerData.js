const data = {
  SocialMedia: [
    {name: 'Facebook', link: 'https://www.facebook.com/nypl', className: 'icon-facebook'},
    {name: 'Twitter', link: 'https://twitter.com/nypl', className: 'icon-twitter2'},
    {name: 'Instagram', link: 'https://instagram.com/nypl', className: 'icon-instagram'},
    {name: 'Tumblr', link: 'https://nypl.tumblr.com/', className: 'icon-tumblr2'},
    {name: 'Youtube', link: 'https://www.youtube.com/user/NewYorkPublicLibrary', className: 'icon-youtube'},
  ],
  FooterLinkLists: [
    {
      FooterLinkList: [
        {name: 'About NYPL', link: '/help/about-nypl', className: 'footer1'},
        {name: 'Press', link: '/help/about-nypl/media-center'},
        {name: 'Careers', link: '/careers'},
        {name: 'Space Rental', link: '/spacerental'}
      ],
      ulClass: ''
    },
    {
      FooterLinkList: [
        {name: 'Privacy Policy', link: '/help/about-nypl/legal-notices/privacy-policy', className: 'footer1'},
        {name: 'Other Policies', link: '/policies'},
        {name: 'Terms & Conditions', link: '/terms-conditions'},
        {name: 'Governance', link: '/help/about-nypl/leadership/board-trustees'}
      ],
      ulClass: ''
    },
    {
      FooterLinkList: [
        {name: 'Rules & Regulations', link: '/help/about-nypl/legal-notices/rules-and-regulations', className: 'footer1'},
        {name: 'Accessibility', link: '/help/community-outreach/services-for-persons-with-disabilities'},
        {name: 'Language', link: '/language'},
      ],
      ulClass: 'last'
    }
  ]
};

export default data;
