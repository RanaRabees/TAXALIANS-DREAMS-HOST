/** 11481944075741701254 */
self.document = self;
self.window = self;
var ytcfg = {
    d: function() {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {})
    },
    get: function(k, o) {
        return k in ytcfg.d() ? ytcfg.d()[k] : o
    },
    set: function() {
        var a = arguments;
        if (a.length > 1) ytcfg.d()[a[0]] = a[1];
        else
            for (var k in a[0]) ytcfg.d()[k] = a[0][k]
    }
};
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "allow_music_base_url": true,
        "allow_skip_networkless": true,
        "clear_user_partitioned_ls": true,
        "deprecate_two_way_binding_child": true,
        "deprecate_two_way_binding_parent": true,
        "desktop_image_cta_no_background": true,
        "desktop_search_image_hover_state": true,
        "desktop_search_image_no_cta": true,
        "desktop_text_ads_gray_visurl": true,
        "disable_child_node_auto_formatted_strings": true,
        "disable_simple_mixed_direction_formatted_strings": true,
        "disable_thumbnail_preloading": true,
        "enable_client_sli_logging": true,
        "enable_gel_log_commands": true,
        "enable_gray_visurl": true,
        "enable_mixed_direction_formatted_strings": true,
        "enable_sasde_for_html": true,
        "enable_server_stitched_dai": true,
        "enable_sli_flush": true,
        "enable_tectonic_ad_ux_for_halftime": true,
        "enable_topsoil_wta_for_halftime_live_infra": true,
        "enable_web_eom_visitor_data": true,
        "export_networkless_options": true,
        "forward_domain_admin_state_on_embeds": true,
        "gpa_sparkles_ten_percent_layer": true,
        "html5_control_flow_include_trigger_logging_in_tmp_logs": true,
        "html5_enable_ads_client_monitoring_log_web": true,
        "html5_enable_single_video_vod_ivar_on_pacf": true,
        "html5_enable_video_overlay_on_inplayer_slot_for_tv": true,
        "html5_pacf_enable_dai": true,
        "html5_recognize_predict_start_cue_point": true,
        "html5_server_stitched_dai_group": true,
        "html5_web_enable_halftime_preroll": true,
        "json_condensed_response": true,
        "kevlar_dropdown_fix": true,
        "kevlar_gel_error_routing": true,
        "kevlar_sw_app_wide_fallback": true,
        "log_heartbeat_with_lifecycles": true,
        "log_web_endpoint_to_layer": true,
        "networkless_gel": true,
        "networkless_logging": true,
        "nwl_send_fast_on_unload": true,
        "offline_error_handling": true,
        "pageid_as_header_web": true,
        "pes_migrate_association_data": true,
        "polymer_bad_build_labels": true,
        "polymer_verifiy_app_state": true,
        "qoe_send_and_write": true,
        "record_app_crashed_web": true,
        "render_unicode_emojis_as_images": true,
        "search_image_menu_alignment": true,
        "skip_ls_gel_retry": true,
        "sponsorships_emojis_in_picker_loading_lazy": true,
        "sponsorships_global_emojis_in_comments_web": true,
        "sponsorships_upsell_in_picker": true,
        "sponsorships_use_png_for_emoji_rendering": true,
        "suppress_error_204_logging": true,
        "sw_nav_request_network_first": true,
        "unicode_emojis_in_picker_in_comments": true,
        "use_bg_facade": true,
        "use_document_lifecycles": true,
        "use_shared_nsm": true,
        "use_shared_nsm_and_keep_yt_online_updated": true,
        "vss_final_ping_send_and_write": true,
        "vss_playback_use_send_and_write": true,
        "web_api_url": true,
        "web_click_command_fallback": true,
        "web_dedupe_ve_grafting": true,
        "web_deprecate_service_ajax_map_dependency": true,
        "web_enable_ad_signals_in_it_context": true,
        "web_enable_voz_audio_feedback": true,
        "web_forward_command_on_pbj": true,
        "web_inject_fetch_manager": true,
        "web_log_memory_total_kbytes": true,
        "web_log_push_impressions_after_show": true,
        "web_ordered_response_processors": true,
        "web_prefetch_preload_video": true,
        "web_use_global_sw_error_handler": true,
        "web_use_url_api_to_add_params": true,
        "web_yt_config_context": true,
        "ytidb_fetch_datasync_ids_for_data_cleanup": true,
        "addto_ajax_log_warning_fraction": 0.1,
        "log_window_onerror_fraction": 0.1,
        "ytidb_transaction_ended_event_rate_limit": 0.02,
        "botguard_async_snapshot_timeout_ms": 3000,
        "check_navigator_accuracy_timeout_ms": 0,
        "initial_gel_batch_timeout": 2000,
        "network_polling_interval": 30000,
        "polymer_log_prop_change_observer_percent": 0,
        "web_foreground_heartbeat_interval_ms": 28000,
        "web_logging_max_batch": 150,
        "ytidb_remake_db_retries": 3,
        "ytidb_reopen_db_retries": 3,
        "cb_v2_uxe": "eomn",
        "web_client_version_override": "",
        "kevlar_command_handler_command_banlist": [],
        "web_op_continuation_type_banlist": [],
        "web_op_endpoint_banlist": [],
        "web_op_signal_type_banlist": []
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20220602.00.00",
    "INNERTUBE_CONTEXT": {
        "client": {
            "clientName": "WEB",
            "clientVersion": "2.20220602.00.00"
        }
    },
    "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
    "INNERTUBE_CONTEXT_CLIENT_VERSION": "2.20220602.00.00",
    "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS": {
        "client.name": "WEB"
    }
});
window.ytcfg.obfuscatedData_ = [];
if (self.trustedTypes && self.trustedTypes.createPolicy) {
    const swPolicy = trustedTypes.createPolicy('youtubeServiceWorkerPolicy', {
        createScriptURL: function(ignored) {
            return 'https:\/\/www.youtube.com\/s\/desktop\/d4eb50c8\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js';
        }
    });
    importScripts(swPolicy.createScriptURL(''));
} else {
    importScripts('https:\/\/www.youtube.com\/s\/desktop\/d4eb50c8\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js');
}