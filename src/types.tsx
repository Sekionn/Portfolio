export interface PreviewObject {
    name: string;
    url?: string;
    img: string;
    imageStyle?: string;
    key: string;
    downloadKey?: string;
}

export interface PreviewCVObject {
    name: string;
    key: string;
    img: string;
    downloadKey?: string;
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
    introShowing?: boolean;
    cvSelected?: boolean;
    cvData?: PreviewCVObject;
}