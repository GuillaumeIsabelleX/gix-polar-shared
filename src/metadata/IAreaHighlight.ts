import {IBaseHighlight} from "./IBaseHighlight";
import {Rect} from "../Rect";
import {IImage} from "./Image";
import {INote} from "./INote";
import {IQuestion} from "./IQuestion";
import {IFlashcard} from "./IFlashcard";
import {ISODateTimeString} from "./ISODateTimeStrings";
import {Author} from "./Author";
import {HighlightColor} from "./HighlightColor";

export interface IAreaHighlight extends IBaseHighlight {

    readonly rects: { [key: number]: Rect };
    readonly image?: IImage;
    readonly images: { [key: string]: IImage };
    readonly notes: { [key: string]: INote };
    readonly questions: { [key: string]: IQuestion };
    readonly flashcards: { [key: string]: IFlashcard };
    readonly id: string;
    readonly guid: string;
    readonly created: ISODateTimeString;
    readonly lastUpdated: ISODateTimeString;
    readonly author?: Author;
    readonly color?: HighlightColor;

}
