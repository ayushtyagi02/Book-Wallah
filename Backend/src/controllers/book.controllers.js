import { Book } from "../models/book.models.js";
import { User } from "../models/user.models.js";
import { Genre } from "../models/genre.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponses.js";

const createBook = asyncHandler(async (req, res) => {
  const { bookName, ownerName, description, coverImage, authorName, genre } =
    req.body;
  console.log(
    bookName,
    ownerName,
    description,
    coverImage,
    authorName,
    "hereeee"
  );

  //validate
  if (
    !bookName ||
    !ownerName ||
    !description ||
    !coverImage ||
    !authorName ||
    !genre
  ) {
    throw new ApiError(400, "All Fields are required!");
  }

  const owner = await User.findOne(ownerName);
  if (!owner) {
    throw new ApiError(400, "Owner does not exist !");
  }

  let existingGenre = await Genre.findOne(genreName);

  if (!existingGenre) {
    const newGenre = new Genre(genreName);
    const existingGenre = await newGenre.save();
  }

  const newBook = await Book.create({
    bookName,
    ownerName,
    description,
    coverImage,
    authorName,
    genre: existingGenre,
  });

  await newBook.save();

  const updatedUser = await User.findByIdAndUpdate(
    { _id: ownerName },
    { $push: { book: newBook } },
    { new: true }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(200, createBook, updatedUser, "Book Created Successfully")
    );
});

const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);
  if (!book) {
    throw new ApiError(400, "Book not found!");
  }

  await Book.findByIdAndDelete(id);

  await User.findByIdAndUpdate(
    book.ownerName,
    { $pull: { books: id } },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "Book deleted succcessfully!"));
});

const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    bookName,
    authorName,
    description,
    coverImage,
    publishDate,
    status,
    genre,
  } = req.body;

  const updatedBook = await Book.findByIdAndUpdate(
    id,
    {
      bookName,
      authorName,
      description,
      coverImage,
      publishDate,
      status,
      genre,
    },
    { new: true }
  );

  if (!updatedBook) {
   throw new ApiError(200 , "Book not found" );
  }


  return res.status(200)
  .json(new ApiResponse(200 , updateBook , "Book updated succesfully"))
});

const getBookByItsID = asyncHandler(async (req, res) => {
const {id} = req.params

const book = await Book.findById(id)

if (!book) {
  throw new ApiError(400 , "Book not found!")
}

return res.status(200)
.json(new ApiResponse(200 , book , "Book fetched successfully!"))

});

const getAllBooks = asyncHandler(async (req, res) => {});

export { createBook };
