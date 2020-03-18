[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Incident Response &amp; Management: Node.js Client](https://github.com/googleapis/nodejs-irm)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/irm.svg)](https://www.npmjs.org/package/@google-cloud/irm)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-irm/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-irm)




Stackdriver Incident Response is currently in private alpha,
visit [cloud.google.com/incident-response](https://cloud.google.com/incident-response/) to
sign up.


* [Stackdriver Incident Response &amp; Management Node.js Client API Reference][client-docs]
* [Stackdriver Incident Response &amp; Management Documentation][product-docs]
* [github.com/googleapis/nodejs-irm](https://github.com/googleapis/nodejs-irm)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Stackdriver Incident Response &amp; Management API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/irm
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-irm/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Annotate Incident | [source code](https://github.com/googleapis/nodejs-irm/blob/master/samples/annotateIncident.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-irm&page=editor&open_in_editor=samples/annotateIncident.js,samples/README.md) |
| Change Severity | [source code](https://github.com/googleapis/nodejs-irm/blob/master/samples/changeSeverity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-irm&page=editor&open_in_editor=samples/changeSeverity.js,samples/README.md) |
| Change Stage | [source code](https://github.com/googleapis/nodejs-irm/blob/master/samples/changeStage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-irm&page=editor&open_in_editor=samples/changeStage.js,samples/README.md) |
| Create Incident | [source code](https://github.com/googleapis/nodejs-irm/blob/master/samples/createIncident.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-irm&page=editor&open_in_editor=samples/createIncident.js,samples/README.md) |
| Create Signal | [source code](https://github.com/googleapis/nodejs-irm/blob/master/samples/createSignal.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-irm&page=editor&open_in_editor=samples/createSignal.js,samples/README.md) |



The [Stackdriver Incident Response &amp; Management Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.



More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-irm/blob/master/CONTRIBUTING.md).

Please note that this [README.md](README.md), the [samples/README.md](samples/README.md),
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-irm/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/irm/latest
[product-docs]: https://cloud.google.com/incident-response
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=irm.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
