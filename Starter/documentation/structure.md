# Directory Structure

The directory structure is a key element in managing applications based on this boilerplate.

# Containers

This directory is for core features which are central to the boilerplate and not specific to any single feature.  

These components connect to the redux store and supply state and methods to child components.

# Components

This directory is for core features which are central to the boilerplate and not specific to any single feature.  

These components are 'Dumb' in the sense that they rely on parent containers and props for data.

# Features

This directory is for development of new features. A feature can contain a single or any number of components. Files should be organised within a feature in the same way as they are within the top level application. ie:
* containers
* components
* style
* services

## All file related to any one component should be in a single folder
Keep all files relating to any one component in a single folder, including styling files.  

If there’s any small component used by a particular component only, it makes sense to keep these smaller components all together within that component folder. The hierarchy will then be easy to understand – large components have their own folder and all their smaller parts are split into sub-folders. This way, you can easily extract code to any other project or even modify the code whenever you want.  

[Back to index](../README.md)
