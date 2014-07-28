# Mindojo Learning Dashboard

The idea of this project is to be universal frontend-only product, which shared common codebase, but have modules specialized for different learning B2B projects, like GMAT Tutor and others. It will consist of different build scripts to output and deploy different projects based on modules and skins included.

Currently this is under the process of bootstrapping.

There is work-in-progress [API doc](./doc/API.md).

# How to setup development environment

```bash
$ npm -g install bower
$ npm -g install ember-cli
$ bower install
$ npm install
$ ember server # to start development environment
```

# How to use generators

```bash
$ ember generate route <route-name> #also will generate template and test
```

To get information about available generators

```bash
$ ember help generate
```
