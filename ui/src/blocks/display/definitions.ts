export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['scrollnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll("'); 
      this.appendValueInput("displaytext")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
  };

  //deprecated
  
  Blocks['scroll'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll("')
        .appendField(new Blockly.FieldTextInput('Hello World'), 'message')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
};

  Blocks['scrollvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll(')
        .appendField(new Blockly.FieldTextInput(''), 'message')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a variable');
      this.setHelpUrl('');
    },
  };

  Blocks['scrollvarnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll('); 
      this.appendValueInput("displaytextvar")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a variable');
      this.setHelpUrl('');
    },
  };
  
  Blocks['imagenew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.show('); 
      this.appendValueInput("imagevar")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Show an image');
      this.setHelpUrl('');
    },
  };

  Blocks['image'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.show(')
        .appendField(new Blockly.FieldTextInput(''), 'image')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Display an image');
      this.setHelpUrl('');
    },
  };

  //deprecated

  Blocks['getpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.get_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'xy')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Gets a pixel value');
      this.setHelpUrl('');
    },
  };

  Blocks['getpixelnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.get_pixel(')
        this.appendValueInput("text")
          .setCheck(null);
        this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Gets a pixel value');
      this.setHelpUrl('');
    },
  };

  //deprecated

  Blocks['setpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.set_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'setpix')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };

  Blocks['setpixelnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.set_pixel(')
        this.appendValueInput("text")
          .setCheck(null);
        this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };


  Blocks['disclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.clear()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Clear the display');
      this.setHelpUrl('');
    },
  };

  Blocks['disonoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("display.")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C3E516","#C3E516","#a4b835");
 this.setTooltip("Turn the display on/off");
 this.setHelpUrl("");
  }
};

Blocks['imagecreate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("image"), "image")
        .appendField(" = (\"")
        .appendField(new Blockly.FieldNumber(0, 0), "1")
        .appendField(new Blockly.FieldNumber(0, 0), "2")
        .appendField(new Blockly.FieldNumber(0, 0), "3")
        .appendField(new Blockly.FieldNumber(0, 0), "4")
        .appendField(new Blockly.FieldNumber(0, 0), "5")
        .appendField(":\"\n");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0), "6")
        .appendField(new Blockly.FieldNumber(0, 0), "7")
        .appendField(new Blockly.FieldNumber(0, 0), "8")
        .appendField(new Blockly.FieldNumber(0, 0), "9")
        .appendField(new Blockly.FieldNumber(0, 0), "10")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0), "11")
        .appendField(new Blockly.FieldNumber(0, 0), "12")
        .appendField(new Blockly.FieldNumber(0, 0), "13")
        .appendField(new Blockly.FieldNumber(0, 0), "14")
        .appendField(new Blockly.FieldNumber(0, 0), "15")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0), "16")
        .appendField(new Blockly.FieldNumber(0, 0), "17")
        .appendField(new Blockly.FieldNumber(0, 0), "18")
        .appendField(new Blockly.FieldNumber(0, 0), "19")
        .appendField(new Blockly.FieldNumber(0, 0), "20")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0), "21")
        .appendField(new Blockly.FieldNumber(0, 0), "22")
        .appendField(new Blockly.FieldNumber(0, 0), "23")
        .appendField(new Blockly.FieldNumber(0, 0), "24")
        .appendField(new Blockly.FieldNumber(0, 0), "25")
        .appendField("\")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C3E516","#C3E516","#a4b835");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

}