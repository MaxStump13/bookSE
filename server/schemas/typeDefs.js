const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Book {
		authors: [String]
		description: String
		bookId: String!
		image: String
		link: String
		title: String!
	}
	type User {
		_id: ID
		username: String!
		email: String!
		bookCount: Int
		savedBooks: [Book]
	}
	type Auth {
		token: ID!
		user: User
	}

	input SavedBook {
		authors: [String]
		description: String
		bookId: String
		image: String
		link: String
		title: String
	}

	type Query {
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		saveBook(input: SavedBook): User
		removeBook(bookId: String!): User
	}
`;

// need to add input type

module.exports = typeDefs;
