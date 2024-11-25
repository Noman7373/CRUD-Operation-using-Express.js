import mongoose from "mongoose";

const dataBaseConnection = async (URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "test",
    };
    await mongoose.connect(URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dataBaseConnection;
