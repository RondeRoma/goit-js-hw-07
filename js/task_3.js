const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const imagePattern = ({url, alt}) => `<li><img src = '${url}' alt = '${alt}' width = 500 height = 350 ></li>`;

  const imageGallery = images.reduce((acc, el) => acc + imagePattern(el), "");
  const listGallery = document.querySelector('#gallery');
  listGallery.insertAdjacentHTML('afterbegin', imageGallery);
  listGallery.setAttribute('style', 'display: column; margin: 10, padding:10; list-style-type: none;');
