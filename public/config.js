env = 'dev';
mode = 'pi2';
hbl_pi1_dev = "http://192.168.41.53:30042";//pi1dev: http://192.168.41.53:30042: just for reference. Not used.
hbl_pi2_dev = "http://192.168.41.51:30071";//pi2dev: http://192.168.41.55:30071
//QA config:
qa_ip = "http://192.168.41.102:30061";

//Production Config:
prod_ip = "http://192.168.41.141:30092";
//File server config:
HBLFileServerIP_Dev = "http://192.168.41.92";
HBLFileServerIP_Qa = "http://192.168.41.201";
HBLFileServerIP_Prod = "http://192.168.41.205";

ip = env == 'dev' ? hbl_pi2_dev : env == 'qa' ? qa_ip : env == 'prod' ? prod_ip : '';

HBLFileServerIP = env == 'dev' ? HBLFileServerIP_Dev : env == 'qa' ? HBLFileServerIP_Qa : env == 'prod' ? HBLFileServerIP_Prod : '';
HBL_MQTT_MQTT_IP = "ws://192.168.41.94:8883/ws-mqtt"; //192.168.41.94

HBL_MQTT_TOPIC_Dev = "hbl_test/sensordata/tag_list";
HBL_MQTT_TOPIC_Qa = "hbl/sensordata/tag_list_Balram";//previous topic:hbl/sensordata/tag_list_test,hbl/sensordata/tag_list_Balram 
HBL_MQTT_TOPIC_Prod = "hbl/prd/iiot/gateway/sensor/data";

HBL_MQTT_TOPIC = env == 'dev' ? HBL_MQTT_TOPIC_Dev : env == 'qa' ? HBL_MQTT_TOPIC_Qa : env == 'prod' ? HBL_MQTT_TOPIC_Prod : '';
HBL_MQTT_RESET_TOPIC_Dev = "hbl/sensordata/counter_reset";
HBL_MQTT_RESET_TOPIC_Qa = "hbl/sensordata/tag_list_hbl_ui";
HBL_MQTT_RESET_TOPIC_Prod = "hbl/prd/gateway/workorder/status/data";

HBL_MQTT_RESET_TOPIC = env == 'dev' ? HBL_MQTT_RESET_TOPIC_Dev : env == 'qa' ? HBL_MQTT_RESET_TOPIC_Qa : env == 'prod' ? HBL_MQTT_RESET_TOPIC_Prod : '';
//For future keycloak integration:
keycloak_ip_dev = "http://192.168.41.132:8080/auth";
keycloak_realm_dev = "HBLRealm-dev";
keycloak_ip_qa = "http://192.168.41.132:8080/auth";
keycloak_realm_qa = "HBLRealm-qa";
keycloak_ip_prod = "http://192.168.41.154:8080/auth";
keycloak_realm_prod = "HBLRealm";
builtAt = '6 Sep 2024 23:17';
config = {
    ENV: env,
    builtAt: builtAt,
    mode: mode,
    HBLHeaderBGColor: "linear-gradient(to right, #104888 , black)",
    HBLSidebarBGColor: "linear-gradient(to right, #ffffff , white)",
    //linear-gradient(to right, blue, black)
    VITE_KEYCLOAK_AUTH_URL:"http://192.168.41.132:8080/auth",
VITE_UI_APP_KEYCLOAK_REALM:"BusinessConsole-dev",
VITE_UI_APP_KEYCLOAK_CLIENTID:"concession-frontend",
    HBLLoginAPI: ip + "/hbl-inventory/api/v1/login",
    HBLWOUploadAPI: ip + "/hbl-inventory/api/v1/upload/work-order",
    HBLProdBOMUploadAPI: ip + "/hbl-inventory/api/v1/upload/production-bom",
    HBLFileServer: HBLFileServerIP,
    HBL_COMPARE_TOP_BOTTOM_API: ip + "/hbl-inventory/api/v1/upload/placement/top-bottom",
    HBL_COMPARE_ERROR_REPORT_URL: ip + "/hbl-inventory/api/v1/fetch/bom-placement-diff-report?workOrder=6000026856&partNumber=6000032826",
    HBL_FEEDER_UPLOAD_API: ip + "/hbl-inventory/api/v1/upload/feeder-data",
    HBL_RMS_API: ip + "/hbl-inventory/api/v1/fetch/rm-status",
    HBL_RMS_SUBMIT_QUANTITY_API: ip + "/hbl-inventory/api/v1/fm/material/issue",//"issued" or "exception"
    HBL_MATERIAL_REQUEST_SUBMIT_QUANTITY_API: ip + "/hbl-inventory/api/v1/fm/action/center/material/issue",//"issued" or "exception"
    HBL_RMS_ASSIGN_API: ip + "/hbl-inventory/api/v1/update-remove/rm-data",
    HBL_WOM_API: ip + "/hbl-inventory/api/v1/fetch/work-order-management",


    HBL_MACHINE_SETUP_ONLOAD_API: ip + "/hbl-inventory/api/v1/fetch/machine-setup",
    HBL_LINE_STATUS: ip + "/hbl-inventory/api/v1/fetch/lines/status?plantNumber=P-1",
    HBL_MACHINE_FEEDER_MAPPING_API: ip + "/hbl-inventory/api/v1/validate/component-feeder",
    HBL_MACHINE_FEEDER_QC_SUBMIT_API: ip + "/hbl-inventory/api/v1/update/work-order-status",
    HBL_MACHINE_FEEDER_AOI_API: ip + "/hbl-inventory/api/v1/fetch/aoi-inspection/work-orders",
    HBL_ASSIGN_LINE_TO_WO: ip + "/hbl-inventory/api/v1/assign/line/work-order",
    HBL_GET_WO_LIST: ip + "/hbl-inventory/api/v1/fetch/compared-success/work-orders?plantNumber=P-1",
    HBL_QC_MANAGEMENT_API: ip + "/hbl-inventory/api/v1/qc/fetch/quality-control-management",
    HBL_REALTIME_TABLE: ip + "/hbl-inventory/api/v2/operator/dashboard/shortage-expected-data",
    HBL_MACHINE_FEEDER_AOI_dropdown_API: ip + "/hbl-inventory/api/v1/fetch/aoi-inspection/defect-types",
    HBL_WOM_FM_API: ip + "/hbl-inventory/api/v1/fetch/fm-line-work-order",
    HBL_PROD_START_API: ip + "/hbl-inventory/api/v1/operator/start-production?workOrder=6000026856",
    HBL_AOI_ONLOAD_API: ip + "/hbl-inventory/api/v1/fetch/aoi-inspection/line/work-order/defects?workOrder=",
    HBL_AOI_MANAGEMENT_ONLOAD_API: ip + "/hbl-inventory/api/v1/fetch/aoi/list-workorders?user=",
    HBL_AOI_UPDATE_EXISTING_DEFECT_API: ip + "/hbl-inventory/api/v1/update/aoi-inspection/defect",
    HBL_AOI_UPDATE_NEW_DEFECT_API: ip + "/hbl-inventory/api/v1/insert/aoi-inspection/defect",
    HBL_AOI_DELETE_DEFECT: ip + "/hbl-inventory/api/v1/delete/aoi-inspection/defect?id=",
    HBL_AOI_DEFECT_DOWNLOAD: ip + "/hbl-inventory/api/v1/generate/aoi-inspection/defect/report",
    HBL_PROD_COMPLETE_API: ip + "/hbl-inventory/api/v1/update/complete-production",
    HBL_SENSOR_S1_STRING: "iiot_sensor_S1",
    HBL_SENSOR_S2_STRING: "iiot_sensor_S2",
    HBL_SENSOR_SUBSCRIBE_TOPIC: HBL_MQTT_TOPIC,
    HBL_SENSOR_RESET_TOPIC: HBL_MQTT_RESET_TOPIC,
    HBL_MQTT_MQTT_IP: HBL_MQTT_MQTT_IP,
    HBL_SEND_MQTT_TO_API: ip + "/hbl-inventory/api/v1/operator/mqtt/subscribe",
    SEND_MQTT_TO_API_FLAG: false,
    HBL_WOE_UPLOAD_API: ip + "/hbl-inventory/api/v1/fm/upload/planning/work-order",
    HBL_WOE_UPLOADED_API: ip + "/hbl-inventory/api/v1/fm/fetch/planning/work-orders?plantNumber=IND_HYD",
    HBL_WOE_DELETE_API: ip + "/hbl-inventory/api/v1/fm/delete/planning/work-order?workOrderNumber=6000026856",

    HBL_OCCUPIED_LOCATIONS: ip + "/hbl-inventory/api/v1/fetch/occupied/location-code?plantNumber-P-1&sapCode=SAP001",
    HBL_AVAILABLE_LOCATIONS: ip + "/hbl-inventory/api/v1/fetch/available/location-code?plantNumber-P-1&sapCode=SAP001",
    HBL_INVENTORY_TABLE_GET_STATUS: ip + "/hbl-inventory/api/v1/fm/fetch/inventory-status?plantNumber=IND_HYD",
    HBL_SAVE_ADD_STOCK_SUBMIT: ip + "/hbl-inventory/api/v1/fm/save/add-stock/submit",
    HBL_ACTION_CENTER_MATERIAL_REQUEST_TAB: ip + "/hbl-inventory/api/v1/fm/fetch/material-request/data?plantNumber=IND_HYD",
    HBL_ACTION_CENTER_STOCK_RETURN_TAB: ip + "/hbl-inventory/api/v1/fm/fetch/stock-return/data?plantNumber=IND_HYD",
    HBL_GET_AVAILABLE_QUANTITY_INTERIM_STORE: ip + "/hbl-inventory/api/v1/fm/fetch/component/rack/available/quantity?sapCode=1000024888&plantNumber=IND_HYD",
    HBL_REQUEST_FROM_DASHBOARD: ip + "/hbl-inventory/api/v1/operator/material-request",
    HBL_WOE_ESTIMATION_HISTORY_API: ip + "/hbl-inventory/api/v1/fm/fetch/work-orders/estimation/order/history?plantNumber=IND_HYD",
    HBL_GET_AVAILABLE_LOCATIONS_API: ip + "/hbl-inventory/api/v1/fetch/available/locations?plantNumber=IND_HYD",
    HBL_RETURN_STOCK_SUBMIT: ip + "/hbl-inventory/api/v1/fm/stock-return/quantity/add/interim",
    HBL_INWARD_MATERIAL_TABLE_GET_STATUS: ip + "/hbl-inventory/api/v1/fetch/order/inward/reports?orderId=46",
    HBL_LOCATION_FOR_SAPCODE: ip + "/hbl-inventory/api/v1/fetch/sap-code/location?sapCode=1000024888&plantNumber=IND_HYD",
    HBL_ESTIMATION_API: ip + "/hbl-inventory/api/v1/fm/fetch/work-orders/estimate",
    HBL_ESTIMATION_PLACE_ORDER: ip + "/hbl-inventory/api/v1/fm/estimation/place-order",
    HBL_GET_PRODUCTION_STATUS: ip + "/hbl-inventory/api/v1/operator/fetch/production-header",
    HBL_GET_RECEIVED_MATERIALS: ip + "/hbl-inventory/api/v1/fm/fetch/order/received/materials?orderId=",
    HBL_ADD_UPDATE_MATERIAL_ROW: ip + "/hbl-inventory/api/v1/fm/update/order/received/material",
    HBL_DELETE_MATERIAL_ROW: ip + "/hbl-inventory/api/v1/fm/remove/order/received/material",
    HBL_SUBMIT_MATERIAL_REQUEST: ip + "/hbl-inventory/api/v1/fm/order/receive/material/submit",
    HBL_SUBMIT_RECEIPT: ip + "/hbl-inventory/api/v1/fm/update/receipt-detail",
    HBL_GET_DOWNTIME_CATEGORIZATION_REASONS: ip + "/hbl-inventory/api/v1/fm/downtime-categorization/delay/reasons",
    HBL_INVENTORY_STATUS_TIMER: 25000,
    HBL_LIVE_PRODUCTION_TRACKER_TIMER: 5000,
    HBL_ACTION_CENTER_TIMER: 10000,
    HBL_ANDON_STATUS_TIMER: 5000,
    HBL_DOWNTIME_TABLE: ip + "/hbl-inventory/api/v1/fm/downtime-categorization/delay/data",
    HBL_DOWNTIME_DELAY_REPORT_DOWNLOAD: ip + "/hbl-inventory/api/v1/fm/fetch/downtime-categorization/delay/report",
    HBL_GET_OPERATOR_BREAKTIME_DATA: ip + "/hbl-inventory/api/v1/operator/dashboard/break_time_data",
    HBL_DOWNTIME_HEADER_DATA: ip + "/hbl-inventory/api/v1/downtime-categorization/header/data?plantNumber=IND_HYD",
    HBL_UPDATE_CYCLE_THRESHOLD_TIME: ip + "/hbl-inventory/api/v1/fm/upsert/work-order-management/cycle-time/threshold-time",
    HBL_LIVE_PRODUCTION_TRACKER_DATA: ip + "/hbl-inventory/api/v1/live-production-tracker/dashboard/data?plantNumber=IND_HYD",
    HBL_SUBMIT_OPERATOR_BREAKTIME_DATA: ip + "/hbl-inventory/api/v1/operator/on-hold-production",
    HBL_DOWNTIME_TABLE_SUBMIT: ip + "/hbl-inventory/api/v1/fm/update/downtime-categorization/delay/data",
    HBL_SUBMIT_OPERATOR_RESUME: ip + "/hbl-inventory/api/v1/operator/resume-production",
    HBL_QC_BYPASS_SUBMIT: ip + "/hbl-inventory/api/v1/qc/management/submit",
    HBL_DOWNTIME_TABLE_SAVE_COMPLETE: ip + "/hbl-inventory/api/v1/fm/downtime-categorization/submit/work-order",
    HBL_EDIT_MATERIAL_ROW: ip + "/hbl-inventory/api/v1/fm/edit/order/received/material",
    HBL_TOP_BOTTOM_VALIDATE_API: ip + "/hbl-inventory/api/v1/validate/top-bottom",
    HBL_QC_DOWNLOAD_API: ip + "/hbl-inventory/api/v1/qc/report",
    HBL_INVENTORY_ADHOC_ISSUE: ip + "/hbl-inventory/api/v1/fm/material/issue-for-adhoc-reason",
    HBL_INVENTORY_Reason_Dropdown: ip + "/hbl-inventory/api/v1/fm/fetch/inventory-status/issue/reasons",
    HBL_COMPARISON_SUCCESS_CONFIRM: ip + "/hbl-inventory/api/v1/fm/confirm/work-order-status?workOrder=",
    HBL_WOM_RMSTATUS_BUTTON_STATUS: ip + "/hbl-inventory/api/v1/fm/fetch/rmstatus/enable/status",
    HBL_LIVE_PRODUCTION_TRACKER_DOWNLOAD: ip + "/hbl-inventory/api/v1/fm/fetch/live-production-tracker/download/report",
    HBL_WASTAGE_REPORT_SUBMIT:ip + "/hbl-inventory/api/v1/operator/save/wastage-quantity/submit",
}
