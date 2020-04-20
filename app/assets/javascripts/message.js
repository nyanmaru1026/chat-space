$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main-chat-message-list">
         <div class="main-chat-message-list-info">
           <div class="main-chat-message-talker">
             ${message.user_name}
           </div>
           <div class="main-chat-message-date">
             ${message.created_at}
           </div>
         </div>
         <div class="main-chat-message-statement">
             ${message.content}
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main-chat-message-list">
         <div class="main-chat-message-list-info">
           <div class="main-chat-message-talker">
             ${message.user_name}
           </div>
           <div class="main-chat-message-date">
             ${message.created_at}
           </div>
         </div>
         <div class="main-chat-message-statement">
             ${message.content}
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
 .done(function(data){
  var html = buildHTML(data);
  $('.main-chat-message').append(html);
  $('.main-chat-message').animate({ scrollTop: $('.main-chat-message')[0].scrollHeight});
  $('form')[0].reset();
  $('.main-chat-message-input-box-send-btn').prop('disabled', false);
})
 .fail(function() {
  alert("メッセージ送信に失敗しました");
    });
  })
});