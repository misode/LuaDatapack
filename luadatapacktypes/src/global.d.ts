/** @noSelfInFile */

/// <reference path='source.d.ts'/>
/// <reference path='entity.d.ts'/>
/// <reference path='blockentity.d.ts'/>

/**
 * Arguments passed by `/lua`
 */
declare let args : string[];

/**
 * Data about the executor. Basically equivalent as `@s`
 */
declare let src : Source;

/**
 * Namespaced id of the file that was called
 * 
 * @remarks
 * If a file was `require`d, `filename` will not change
 * 
 */
declare let filename : string;

/**
 * Imports a module from a datapack using a namespaced id
 * @param mod Module name
 */
declare function require(mod : string) : any;

/**
 * Get entites from a target selector
 * @param tag Selector
 */
declare function selector(tag : string) : Entity[];

/**
 * Runs a command using the current source
 * @param cmd Command
 */
declare function command(cmd : string) : void;

/**
 * Gets the block id at a position in the current dimension
 * 
 * @see {@link src}
 * 
 * @param pos Position
 */
declare function get_block(pos : Vec3d) : string;

/**
 * Get block entity at position, null if not a block entity
 * @param pos Position
 */
declare function get_blockentity(pos : Vec3d) : BlockEntity;

/**
 * Places a block at a position
 * 
 * @remarks
 * This uses `/setblock replace`, so any valid [block_state](https://minecraft.wiki/w/Argument_types#block_state) will work
 * 
 * @param pos Position
 * @param id Block
 */
declare function set_block(pos : Vec3d, id : string) : void;

/**
 * Runs the script as if calling `/lua`
 * @param script Namespaced id
 * @param args Args
 */
declare function run(script : string, ...args : string[]) : void;

/**
 * Prints objects to the chat
 * 
 * @remarks
 * If an object is a table, it is converted to NBT before printing
 * 
 * @param args Args
 */
declare function print(...args : any[]) : void;

/**
 * Prints objects to the console
 * 
 * @remarks
 * If an object is a table, it is converted to NBT before printing
 * 
 * @param args Args
 */
declare function print_db(...args : any[]) : void;
