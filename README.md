CKEditor 5 with File Manager build
==================================

This repository contains a build for CKEditor 5 with all the features needed for managing your media. This is done by including a [free file manager](https://flmngr.com) as a plugin in the build. 

Flmngr file manager allows you to upload, manage and insert images into your content. It also has the Image42 image editor (formerly ImgPen) built into it.

Flmngr is a part of N1ED for CKEditor 5, the [`@edsdk/n1ed-ckeditor5`](https://www.npmjs.com/package/@edsdk/n1ed-ckeditor5) plugin, and this build carries the whole plugin, set up for Flmngr: with a Flmngr API key it runs the file manager and the image editor. Whatever your key gets later in the Dashboard (the blocks come with [N1ED](https://n1ed.com)) comes on in this same build, with no rebuild.

You will store all the files and image on your own server and have full control over them. A simple [PHP script](https://packagist.org/packages/edsdk/flmngr-server-php) is included for that.

## Install

See [the installation guide](https://flmngr.com/doc/install-ckeditor-5-with-file-manager-build) describing using this build.

Then after you started using it, please [install the PHP backend](https://flmngr.com/doc/install-php-file-manager-composer) to switch from the default demo file server to your one where you host a website or an app.

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html).
