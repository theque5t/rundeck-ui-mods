# rundeck-ui-mods

## Introduction

[Rundeck](https://www.rundeck.com/) [UI plugin](https://rundeck.org/docs/developer/ui-plugins.html) that adds the following:
* __Select All Options Button__
    - Provider: `select-all-options-button` 
    - Description: `Adds a check/uncheck all button beneath all multi-valued options on a job execution page.`
    - [Example](docs/en-US/selectAllOptionsButton/example.md)

## Installation

1. Download the [plugin file](https://github.com/theque5t/rundeck-ui-mods/raw/master/build/rundeck-ui-mods-1.0.0-plugin.zip)

```sh
wget "https://github.com/theque5t/rundeck-ui-mods/raw/master/build/rundeck-ui-mods-1.0.0-plugin.zip"
```

2. Put the plugin file, selectall-options-ui-plugin.zip, into the [plugin directory](https://rundeck.org/docs/developer/plugin-development.html)

```sh
mv rundeck-ui-mods-1.0.0-plugin.zip /var/lib/rundeck/libext
```

3. Restart the Rundeck service

```sh
service rundeckd restart
```