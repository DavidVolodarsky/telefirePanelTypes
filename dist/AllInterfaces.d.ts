interface IGetPCCodesReq {
    Name: string;
    Directory: string | undefined;
    ProjectName: string | undefined;
    FileName: string | undefined;
    Panel: string | undefined;
    Type: string | undefined;
    Password: string | undefined;
    PanelVersion: string | undefined;
}
interface IGetPCCodesRes {
    Name: string;
    OldPCId: string;
    NewPCId: string;
}
interface ILoginRequest {
    Name: string;
    CreateDirections: boolean;
    OldPcID?: string;
    NewPcID?: string;
}
interface ILoginResponse {
    Name: string;
    ClientNo: string;
    Result: string;
}
interface ISetCommunicationReq {
    Name: string;
    Type: string;
    Baud: number;
    Port: string;
    Vid: number;
    Pid: number;
    Ip: string;
    TcPort: number;
}
interface ISetCommunicationRes {
    Name: string;
    Type: string;
    Result: string;
}
interface IConnectPanelReq {
    Name: string;
    Panel: string;
    OwnerShip: string;
}
interface IConnectPanelRes {
    Name: string;
    ReqPanel: string;
    result: string;
    Panel: number;
    type: string;
    version: string;
    processor: string;
    serial: string;
    date: string;
    ownership: string;
}
interface IConfigurationDataPartners7000 {
    panel: boolean;
    evacuation: boolean;
    silence: boolean;
    reset: boolean;
}
interface IConfigurationDataRM7000 {
    enable: boolean;
    description: string;
}
interface IConfigurationDataNac7000 {
    silence: boolean;
    type: string;
    alarm: string;
}
interface IConfigurationDataLoops7000 {
    loop: string;
}
interface IConfigurationDataCom7000 {
    type: string;
    control: string;
}
interface IConfigurationDataRealy7000 {
    type: string;
}
interface IConfigurationDataDialer7000 {
    type: string;
}
interface IConfigurationDataGNF7000 {
    type: string;
    valid: string;
}
interface IConfigurationDataSCM7000 {
    enable: boolean;
    dayofweek: string;
    hour: string;
}
interface IConfigurationDataPA7000 {
    enable: boolean;
    active: boolean;
    microphone: boolean;
    music: boolean;
    dealy: string;
}
interface IConfigurationData7000 {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    smockcontrol: IConfigurationDataSCM7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    expandcard: boolean;
    connect3000: boolean;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
    lon: boolean;
    option1: boolean;
    option2: boolean;
}
interface IConfigurationDataSaver {
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationDataGuard {
    rms: IConfigurationDataRM7000[];
    Nac1: IConfigurationDataNac7000;
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationDataNewGuard {
    rms: IConfigurationDataRM7000[];
    Nac1: IConfigurationDataNac7000;
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    pasystem: IConfigurationDataPA7000;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
}
interface IConfigurationData3000 {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    loops: IConfigurationDataLoops7000[];
    language: string;
    firstfaultdelay: string;
}
interface IGetConfigurationReq {
    Name: string;
    panel: string;
    source: string;
    type: string;
}
interface IGetConfigurationRes {
    Name: string;
    panel: string;
    source: string;
    type: string;
    Result: string;
    data7000: IConfigurationData7000;
    datasaver: IConfigurationDataSaver;
    dataguard: IConfigurationDataGuard;
    datanewguard: IConfigurationDataNewGuard;
    data3000: IConfigurationData3000;
}
interface ISetConfigurationReq {
    partnres: IConfigurationDataPartners7000[];
    rms: IConfigurationDataRM7000[];
    Nacs: IConfigurationDataNac7000[];
    loops: IConfigurationDataLoops7000[];
    com1: IConfigurationDataCom7000;
    com2: IConfigurationDataCom7000;
    com5: IConfigurationDataCom7000;
    relays: IConfigurationDataRealy7000[];
    dialer1: IConfigurationDataDialer7000;
    dialer2: IConfigurationDataDialer7000;
    groundfault: IConfigurationDataGNF7000;
    smockcontrol: IConfigurationDataSCM7000;
    pasystem: IConfigurationDataPA7000;
    Name: string;
    panel: string;
    source: string;
    type: string;
    password: string;
    panelno: number;
    description: string;
    rmcontrol: string;
    language: string;
    outputprotocol: string;
    usb: string;
    com3: string;
    com4: string;
    screenmessage: string;
    expandcard: boolean;
    connect3000: boolean;
    firstfaultdelay: string;
    preventsilencedelay: string;
    buzzerdelay: string;
    lon: boolean;
    option1: boolean;
    option2: boolean;
}
interface ISetConfigurationRes {
    Name: string;
    panel: string;
    source: string;
    type: string;
    Result: string;
}
interface IProject {
    ProjectName: string;
    Type: string;
    versionscount: number;
    createdate: string;
    createby: string;
    panels: number;
}
interface IListProjectsRequest {
    Name: string;
    Dir: string;
}
interface IListProjectsResponse {
    Projects: IProject[];
    Name: string;
    Dir: string;
    Count: string;
}
interface IListProjectFilesRequest {
    Name: string;
    Project: string;
}
interface IProjectFile {
    FileName: string;
}
interface IListProjectFilesResponse {
    Files: IProjectFile[];
    Name: string;
    Project: string;
    Count: number;
}
interface ISelectProjectFileRequest {
    Name: string;
    filename: string;
}
interface ISelectProjectFileResponse {
    Name: string;
    filename: string;
    Result: string;
}
interface ICreateNewProjectRequest {
    panels: Record<string, string>;
    Name: string;
    dir: string;
    projectname: string;
    language: string;
    count: number;
    type: string;
    user: string;
}
interface ICreateNewProjectResponse {
    Name: string;
    dir: string;
    projectname: string;
    Result: string;
}
interface SetOneDeviceRequest {
    Serial: number;
    Loop: number;
    Address: number;
    Program: boolean;
    Description: string;
    DeviceType: string;
    Zone: number;
    GlobalZone: boolean;
    Mode: string;
    Sensitivity: string;
    NightSensitivity: string;
    Prealarm: string;
    Class: string;
    Drill: boolean;
    Silence: string;
    Delay: string;
    SmokeControlZone: string;
    MaxAutoAct: string;
    Conditions: string;
    ZoneConditions: string;
    Group: string;
}
interface ISetDevicesRequest {
    Name: string;
    Panel: string;
    Source: string;
    Password: string;
    PanelVersion: number;
    Type: string;
    Count: number;
    Devices: SetOneDeviceRequest[];
}
interface ISetDevicesResponse {
    Name: string;
    Panel: string;
    Source: string;
    Type: string;
    Count: number;
    Result: string;
}
interface IDeviceMatrix {
    Loop: number;
    Address: number;
}
interface IZoneMatrix {
    Zone: number;
}
interface IGetMatrixRequest {
    Name: string;
    Panel: string;
    Loop: string;
    Address: string;
    Source: string;
    PanelType: string;
    Class: string;
}
interface IGetMatrixResponse {
    Name: string;
    Panel: string;
    Loop: string;
    Address: string;
    Source: string;
    PanelType: string;
    Class: string;
    Count: number;
    Result: string;
    Devices: IDeviceMatrix[];
    Zones: IZoneMatrix[];
}
interface ISetOneMatrixRequest {
    Loop: number;
    Address: number;
    Class: string;
    Count: number;
    ZoneConditions: string;
    Conditions: string;
    Devices: IDeviceMatrix[];
    Zones: IZoneMatrix[];
}
interface ISetMatrixesRequest {
    Name: string;
    Panel: string;
    Source: string;
    Password: string;
    PanelVersion: number;
    Type: string;
    Count: number;
    Matrixes: ISetOneMatrixRequest[];
}
interface ISetMatrixesResponse {
    Name: string;
    Panel: string;
    Source: string;
    Type: string;
    Count: number;
    Result: string;
}
interface ISyncPanelToFileRequest {
    Name: string;
    Directory: string;
    ProjectName: string;
    bool: boolean;
    Panel: string;
    Type: string;
    language: string;
    user: string;
    int: number;
    IsNew: boolean;
    panels: object;
}
interface ISyncPanelToFileResponse {
    Name: string;
    FileName: string;
    Panel: string;
    Type: string;
    Result: string;
}
interface ISyncFileToPanelRequest {
    Name: string;
    Directory: string;
    ProjectName: string;
    FileName: string;
    Panel: string;
    Type: string;
    Password: string;
    PanelVersion: number;
}
interface ISyncFileToPanelResponse {
    Name: string;
    FileName: string;
    Panel: string;
    Type: string;
    Result: string;
}
export { IGetPCCodesReq, IGetPCCodesRes, ILoginRequest, ILoginResponse, ISetCommunicationReq, ISetCommunicationRes, IConnectPanelReq, IConnectPanelRes, IConfigurationData7000, IConfigurationDataSaver, IConfigurationDataGuard, IConfigurationDataNewGuard, IConfigurationData3000, IGetConfigurationReq, IGetConfigurationRes, ISetConfigurationReq, ISetConfigurationRes, IProject, IListProjectsRequest, IListProjectsResponse, IListProjectFilesRequest, IProjectFile, IListProjectFilesResponse, ISelectProjectFileRequest, ISelectProjectFileResponse, ICreateNewProjectRequest, ICreateNewProjectResponse, SetOneDeviceRequest, ISetDevicesRequest, ISetDevicesResponse, IDeviceMatrix, IZoneMatrix, IGetMatrixRequest, IGetMatrixResponse, ISetOneMatrixRequest, ISetMatrixesRequest, ISetMatrixesResponse, ISyncPanelToFileRequest, ISyncPanelToFileResponse, ISyncFileToPanelRequest, ISyncFileToPanelResponse };
