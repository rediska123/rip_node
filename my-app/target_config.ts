const target_tauri = false

export const api_proxy_addr = "http://192.168.100.2:8000"
export const img_proxy_addr = "http://192.168.100.2:9000"
export const dest_api = (target_tauri) ? api_proxy_addr : "api"
export const dest_img =  (target_tauri) ?  img_proxy_addr : "logo"
export const dest_root = (target_tauri) ? "" : "/rip_node"