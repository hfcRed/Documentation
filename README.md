<div align="center">

# Documentation

Source code for the [documentation website](https://docs.hfcred.dev/) for my tools and projects

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/medium.svg)](https://starlight.astro.build)

</div>

---


## Running locally

If you dont already have NVM installed, download the latest ``nvm-setup.zip`` from [here](https://github.com/coreybutler/nvm-windows/releases), then extract the zip and run the installer.

If you are on a Unix based machine like Linux or MacOS, run the following command to install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

You can verify that NVM is installed by running:

```bash
nvm --version
```

After installing NVM run the following commands in the directory of the project:

* ``nvm use`` to switch to the required Node version.
  * If the required version is not installed, you will be prompted to run the ``nvm install`` command.
  * After installing the required version, run ``nvm use`` again
* ``npm install`` to install the dependencies

To start testing locally you can use the following commands:

* ``npm run dev`` to start a local dev server at ``localhost:4321``
* ``npm run build`` to create a build of the website
* ``npm run preview`` to preview the build at ``localhost:4321``