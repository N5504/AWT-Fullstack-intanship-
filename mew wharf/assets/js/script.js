var iconArray = {
  's-netclues1': '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><style></style><path id="&lt;Path&gt;" d="M17.54 17.55c-.3.3-.7.45-1.1.45-.39 0-.79-.15-1.09-.45L.46 2.65c-.6-.61-.6-1.59 0-2.2.61-.6 1.59-.6 2.19 0l1.86 1.86 6.85 6.86.01.01.01.01 6.16 6.16c.6.61.6 1.59 0 2.2z" fill="#5981c1"/><path id="&lt;Path&gt;" d="M8.72 15.36c-.3.3-.7.45-1.09.45-.4 0-.79-.15-1.1-.45L.46 9.28c-.6-.61-.6-1.59 0-2.19a1.54 1.54 0 012.19 0l6.07 6.07c.61.61.61 1.59 0 2.2z" fill="#19a362"/><path id="&lt;Path&gt;" d="M4.51 17.53c-.3.3-.7.46-1.09.46-.4 0-.8-.16-1.1-.46L.46 15.67c-.6-.6-.6-1.59 0-2.19a1.54 1.54 0 012.19 0l1.86 1.86c.61.6.61 1.59 0 2.19z" fill="#64c6c2"/><path id="&lt;Path&gt;" d="M17.54 10.91c-.3.3-.7.45-1.1.45-.39 0-.79-.15-1.09-.45L9.27 4.83c-.6-.6-.6-1.59 0-2.19a1.54 1.54 0 012.19 0l2.73 2.72 3.35 3.36c.6.6.6 1.58 0 2.19z" fill="#b21f5f"/><path id="&lt;Path&gt;" d="M13.49.46c.3-.3.7-.45 1.09-.45.4 0 .8.15 1.1.45l1.86 1.86c.6.61.6 1.59 0 2.2-.61.6-1.59.6-2.19 0l-1.86-1.86c-.61-.61-.61-1.59 0-2.2z" fill=""/><path id="&lt;Path&gt;" d="M17.54 17.55c-.3.3-.7.45-1.1.45-.39 0-.79-.15-1.09-.45l-6.16-6.17a1.54 1.54 0 010-2.19c.59-.6 1.56-.61 2.17-.02l.01.01.01.01 6.16 6.16c.6.61.6 1.59 0 2.2z" fill="#466bb3"/><path id="&lt;Path&gt;" d="M8.72 15.36c-.3.3-.7.45-1.09.45-.4 0-.79-.15-1.1-.45l-2.72-2.73c-.6-.6-.6-1.58 0-2.19a1.54 1.54 0 012.19 0l2.72 2.72c.61.61.61 1.59 0 2.2z" fill="#8ec64e"/><path id="&lt;Path&gt;" d="M4.51 17.53c-.3.3-.7.46-1.09.46-.4 0-.8-.16-1.1-.46a1.54 1.54 0 010-2.19c.6-.61 1.58-.61 2.19 0 .61.6.61 1.59 0 2.19z" fill="#96d8e7"/><path id="&lt;Path&gt;" d="M14.19 7.56c-.3.3-.7.45-1.1.45-.39 0-.79-.15-1.09-.45L9.27 4.83c-.6-.6-.6-1.59 0-2.19a1.54 1.54 0 012.19 0l2.73 2.72c.6.61.6 1.59 0 2.2z" fill="#df4f43"/><path id="&lt;Path&gt;" d="M13.49.46c.3-.3.7-.45 1.09-.45a1.551 1.551 0 11-1.09 2.65c-.61-.61-.61-1.59 0-2.2z" fill="#ffc81b"/></svg>',
  'facebook':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" style="" fill="#ffffff" data-original="#1976d2" opacity="1" class=""></path><path d="M432 256h-80v-64c0-17.664 14.336-16 32-16h32V96h-64c-53.024 0-96 42.976-96 96v64h-64v80h64v176h96V336h48l32-80z" style="" fill="#fafafa" data-original="#fafafa" class=""></path></g></svg>',
};


function svgIcon(e) {
  $(e).each(function () {
      var dataIcon = $(this).attr("data-icon");
      if (dataIcon in iconArray) {
          $(this).replaceWith(iconArray[dataIcon]);
      } else {
          console.log(dataIcon + ": This icon(s) does not exists")
      }
  });
}
svgIcon(".n-icon");
/* HTML Example: <i class="n-icon" data-icon="s-x"></i> *//* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
