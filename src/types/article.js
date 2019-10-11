"use strict";

const isArticleNode = ({ node, getNode }) => {
    return !isTrelloNode({ node, getNode }) && node.internal.type === "MarkdownRemark";
};
exports.isArticleNode = isArticleNode;

const isTrelloNode = ({ node, getNode }) => {
    const ancestor = getAncestor({ node, getNode });
    return ancestor && ((ancestor.url || "").indexOf("https://trello.com") > -1);
};
exports.isTrelloNode = isTrelloNode;

const getAncestor = ({ node, getNode }) => {
    let parent;
    while (parent = getNode(node.parent)) {
        node = parent;
    }
    return node;
};
exports.getAncestor = getAncestor;

const isTrelloCard = ({node, getNode, list, lists, board}) => {
    if (list && lists) {
        throw new TypeError("You cannot specify both the `list` and `lists` properties.");
    }
    if (!Array.isArray(lists)) {
        lists = [lists];
    }
    const ancestor = getAncestor({node, getNode});
    return ancestor.internal.type == "TrelloCard" &&
        lists.includes(getNode(ancestor.idList).name) &&
        getNode(ancestor.idBoard).name == board;
};
exports.isTrelloCard = isTrelloCard;

const getType = ({ node, getNode }) => {
    if (node.sourceInstanceName == "pages") {
        return "post";
    }
    if (false) {
        return "link";
    }
    if (isTrelloCard({
        node,
        getNode,
        list: "Accepted",
        board: "Conferences",
    })) {
        return "conference";
    }
    if (false) {
        return "talk";
    }
    if (false) {
        return "service";
    }
    return null;
}
exports.getType = getType;