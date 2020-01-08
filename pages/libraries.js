// @flow
import * as React from "react";
import { Hero } from "@components/hero";
import { Type } from "@components/typography";
import { ContentSection, ContentSections } from "@components/content-section";
import { Button, Buttons } from "@components/button";
import { Video } from "@components/video";
import { detectPlatform, getDownloadUrl } from "@lib";
import { DownloadFeaturette } from "@components/download-buttons";
import { CutoffImage } from "@components/cutoff-image";
import DemoVideo from "@components/demo-video";

import type { Context } from "next";

class Atom extends React.Component<OSProps> {
  static async getInitialProps(ctx: Context): Promise<OSProps> {
    const platform = detectPlatform(ctx);
    const assetUrl = await getDownloadUrl(platform);
    return { platform, assetUrl };
  }

  render() {
    return (
      <>
        <Hero color="rgb(36, 77, 100)">
          <Hero.Pane padding="0 20px 0 0">
            <Hero.Title>
              Enhancing notebook workflows from end-to-end
            </Hero.Title>

            <Type.p>
              The nteract core SDK and application suite provide an interface
              for building and interacting with notebook UIs. But there's so
              much more to notebooks! Our collection of libraries allows you to
              execute notebooks headlessly, generate reports from notebooks for
              members of your organization, and more.
            </Type.p>
          </Hero.Pane>

          <Hero.Pane visual padding="40px 0 0 0">
            <DemoVideo />
          </Hero.Pane>
        </Hero>
        <ContentSections>
          <ContentSection>
            <ContentSection.Pane>
              <ContentSection.Title>papermill</ContentSection.Title>
              <Type.p>
                Parameterizing and executing Jupyter Notebooks is made simple in
                a CLI and Python client with{" "}
                <a href="https://github.com/nteract/papermill" target="_blank">
                  papermill
                </a>
                . It executes your notebooks as inputs and saves the results to
                any of a number of different IO locations (S3, GCS, AzureBlob,
                etc) allowing for easy scheduled and programatic executions of
                notebook templates.
              </Type.p>
            </ContentSection.Pane>

            <ContentSection.Pane visual>
              <img src="https://github.com/nteract/papermill/raw/master/docs/img/enable_parameters.gif" />
            </ContentSection.Pane>
          </ContentSection>

          <ContentSection>
            <ContentSection.Pane>
              <ContentSection.Title>scrapbook</ContentSection.Title>
              <Type.p>
                <a href="https://github.com/nteract/scrapbook" target="_blank">
                  Scrapbook
                </a>{" "}
                is a Python library which adds the ability to save data and
                image results from inside your notebook. This enables the
                ability to later fetch all of the resulting 'scraps' across
                collections of notebook executions in a programatic fashion.
                Essentially the library adds a return value from executing a
                Python notebook.
              </Type.p>
            </ContentSection.Pane>

            <ContentSection.Pane visual>
              <Video webm="/static/scrapbook_basics.webm" />
            </ContentSection.Pane>
          </ContentSection>

          <ContentSection>
            <ContentSection.Title>bookstore</ContentSection.Title>
            <ContentSection.Pane>
              <Type.p>
                Ever need to find out what your notebook looked like 5 days ago?
                <a href="https://github.com/nteract/bookstore" target="_blank">
                  Bookstore
                </a>{" "}
                provides a server extension for Jupyter to enable saving
                notebook versions over time as checkpoints are made during
                authoring. It also grants the ability to publish specific
                notebook versions as a mechanism for sharing stable notebook
                versions with colleagues.
              </Type.p>
            </ContentSection.Pane>
          </ContentSection>
        </ContentSections>
      </>
    );
  }
}

export default Atom;