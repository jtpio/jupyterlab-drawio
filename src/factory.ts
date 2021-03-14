import { ABCWidgetFactory, DocumentRegistry } from '@jupyterlab/docregistry';

import { CommandRegistry } from '@lumino/commands';

import { DrawIODocumentWidget } from './editor';

import { DrawIOWidget } from './widget';

/**
 * A widget factory for drawio.
 */
export class DrawIOFactory extends ABCWidgetFactory<
  DrawIODocumentWidget,
  DocumentRegistry.IModel
> {
  /**
   * Create a new widget given a context.
   */
  constructor(options: DrawioFactory.IDrawioFactoryOptions) {
    super(options);
    this._commands = options.commands;
  }

  protected createNewWidget(
    context: DocumentRegistry.Context
  ): DrawIODocumentWidget {
    return new DrawIODocumentWidget({
      context,
      commands: this._commands,
      content: new DrawIOWidget()
    });
  }

  private _commands: CommandRegistry;
}

export namespace DrawioFactory {
  export interface IDrawioFactoryOptions
    extends DocumentRegistry.IWidgetFactoryOptions {
    commands: CommandRegistry;
  }
}
