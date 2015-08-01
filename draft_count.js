$(function() {
	rcmail.addEventListener('plugin.drafts_count_callback', function(a){
		if($(".mailbox.drafts").length) {
			if(a == 0) {
				if($(".mailbox.drafts").find('.unreadcount').length) {
					$(".mailbox.drafts").find('.unreadcount').remove();
				}
			} else if($(".mailbox.drafts").find('.unreadcount').length) {
				$(".mailbox.drafts").find('.unreadcount').text(a);
			} else {
				$(".mailbox.drafts").append('<span class="unreadcount">'+a+'</span>');
			}
		}
	});
	rcmail.addEventListener('requestcheck-recent', function(){
		rcmail.http_request('plugin.drafts_count');
	});
	rcmail.addEventListener('requestrefresh', function(){
		rcmail.http_request('plugin.drafts_count');
	});
	rcmail.addEventListener('listupdate', function(){
		rcmail.http_request('plugin.drafts_count');
	});
	rcmail.http_request('plugin.drafts_count');
});