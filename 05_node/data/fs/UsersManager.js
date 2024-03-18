const fs = require("fs");
const crypto = require("crypto");

module.exports = class UsersManager {
  constructor() {
    this.path = "./data/fs/files/users.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("archivo creado");
    } else {
      console.log("archivo ya existe");
    }
  }
  async create(data) {
    try {
      if (!data.email) {
        // const error = new Error("ingrese un texto");
        throw new Error("ingrese email");
      } else {
        const user = {
          id: crypto.randomBytes(12).toString("hex"),
          email: data.email,
          photo:
            data.photo ||
            "https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(user);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        console.log({ created: note.id });
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      if (all.length === 0) {
        throw new Error(" no hay notas");
      } else {
        console.log(all);
        return all;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let note = all.find((each) => each.id === id);
      if (!note) {
        throw new Error(" no encontrado");
      } else {
        console.log(note);
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let note = all.find((each) => each.id === id);
      if (!note) {
        throw new Error("no encontrado");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log({ deleted: note.id });
        return note;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

/*  async function test() {
  try {
    const notes = new NotesManager();
    await notes.create({ text: "mi primera nota" });
    await notes.create({ text: "mi segunda nota" });
    await notes.read();
    await notes.readOne("7646c111c5bf80724c746865");
    await notes.destroy("7646c111c5bf80724c746865");
    const third = await notes.create({ text: "mi tercera nota" });
    await notes.readOne(third.id);
    await notes.destroy(third.id);
  } catch (error) {
    console.log(error);
  }
}
test(); */
