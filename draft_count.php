<?php

class draft_count extends rcube_plugin {
	public $task = 'mail';

	function init() {
		$this->register_action('plugin.drafts_count', array($this, 'drafts_count_handler'));
		$this->include_script('draft_count.js');
	}

	function drafts_count_handler() {
		$rcmail = rcmail::get_instance();
		/** @var $imap rcube_imap  */
		$imap = $rcmail->imap;
		$count  = $imap->count('Drafts');
		$rcmail->output->command('plugin.drafts_count_callback', $count);
		$rcmail->output->send('plugin');
	}
}
