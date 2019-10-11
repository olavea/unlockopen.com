"use strict";

const isArticleNode = ({ node, getNode }) => {
    return !_isTrelloNode({ node, getNode }) && node.internal.type === "MarkdownRemark";
};
exports.isArticleNode = isArticleNode;

const _isTrelloNode = ({ node, getNode }) => {
    const ancestor = getAncestor({ node, getNode });
    return ancestor && ((ancestor.url || "").indexOf("https://trello.com") > -1);
};

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
    console.log(node)
    return ancestor.internal.type == "TrelloCard" &&
        lists.includes(getNode(ancestor.idList).name) &&
        getNode(ancestor.idBoard).name == board;
};
exports.isTrelloCard = isTrelloCard;
