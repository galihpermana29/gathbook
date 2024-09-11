import { RichTextEditor, RichTextEditorControlsGroup } from "@mantine/tiptap";

export const EditorToolbar = () => {
  return (
    <RichTextEditor.Toolbar
      sticky
      stickyOffset={60}
      className="flex items-center justify-between gap-x-8 gap-y-2"
    >
      <span className="text-sm font-semibold">Content Editor</span>
      <div className="flex items-center gap-2 overflow-x-auto">
        <RichTextEditorControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditorControlsGroup>

        <RichTextEditorControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
        </RichTextEditorControlsGroup>
      </div>
    </RichTextEditor.Toolbar>
  );
};
