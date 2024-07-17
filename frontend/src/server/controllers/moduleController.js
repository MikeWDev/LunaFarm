import Module from "./moduleController";

const getModules = async (req, res) => {
  const modules = await Module.find({});
  res.status(200).json(modules);
};

const getModule = async (req, res) => {
  const id = req.params.id;

  const module = await Module.find({ id });
  if (!module) {
    return res.status(404).send("No module with the provided id");
  }
  res.status(200).json(module);
};


