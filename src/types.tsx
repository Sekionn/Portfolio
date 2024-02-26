export interface PreviewObject {
    name: string;
    url?: string;
    img: string;
    key: string;
    downloadKey: string;
}

export interface projectInfoType {
    again: string;
    bossSlayers: string;
    escape: string;
    introShop: string;
    school: string;
    silkroutegame: string;
}

export interface IProps {
    testMethod?: Function
}

export interface IState {
    selectedProject?: PreviewObject;
}