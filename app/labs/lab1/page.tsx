import HeadingTags from "./HeadingTags";
import ParagraphTags from "./ParagraphTags";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms";
import HighlightedParagraphLab from "./HighlightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";
import AnchorTag from "./AnchorTab";

export default function lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <HeadingTags />
            <ParagraphTags />
            <ListTags />
            <Tables />
            <Images />
            <Forms />
            <HighlightedParagraphLab />
            <HighlightedBoxLab />
            <AnchorTag />

        </div>
    );
}