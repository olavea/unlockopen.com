"use strict";

const { isTrelloCard } = require('./utils');

exports.isConference = ({ node, getNode }) => {
    return isTrelloCard({
        node,
        getNode,
        list: "Accepted",
        board: "Conferences",
    });
}

exports.createConference = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators
    createNodeField({ node, name: "type", value: "conference" });
    attachFields(node, createNodeField, [{
        predicate: _ => true,
        fields: [
            //{
            //    name: 'readers',
            //    getter: node => node.frontmatter.readers,
            //    defaultValue: "",
            //    transformer: readers => readers.split(",").map(r => r.trim()).filter(r => r),
            //},
            //{
            //    name: 'author',
            //    getter: node => node.frontmatter.author,
            //    defaultValue: "Tobie Langel",
            //},
            //{
            //    name: 'title',
            //    getter: node => node.frontmatter.title,
            //    defaultValue: node => node.fields.slug,
            //},
            //{
            //    name: 'date',
            //    getter: node => node.frontmatter.date,
            //},
            //{
            //    name: 'bio',
            //    getter: node => node.frontmatter.bio,
            //    defaultValue: false,
            //}
        ]
    }]);
}
