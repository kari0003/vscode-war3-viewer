'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { TextDocumentContentProvider, ExtensionContext, Uri, ViewColumn } from 'vscode';
import { template as template1 } from './template';
const source = {
    "version": [ 0, 1 ],
    "id": "                                                                                _conv",
    "meshes": [
        {
            "attributes": [
                "POSITION",
                "NORMAL",
                "TEXCOORD0"
            ],
            "vertices": [ 30, 0, -30, 0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 1, 1, 30, 0, -30, 0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 1, 0, 30, 0, -30, 0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 1, 1, 30, 0, 30, 0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 1, 0, 30, 0, 30, 0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 1, 1, 30, 0, 30, 0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 1, 0, -30, 0, -30, -0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 0, 1, -30, 0, -30, -0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 1, 1, -30, 0, -30, -0.5773502588272095, -0.5773502588272095, -0.5773502588272095, 1, 0, -30, 0, 30, -0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 0, 0, -30, 0, 30, -0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 1, 1, -30, 0, 30, -0.5773502588272095, -0.5773502588272095, 0.5773502588272095, 1, 0, 30, 60, -30, 0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 1, 0, 30, 60, -30, 0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 0, 0, 30, 60, -30, 0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 0, 1, 30, 60, 30, 0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 1, 1, 30, 60, 30, 0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 0, 1, 30, 60, 30, 0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 0, 0, -30, 60, -30, -0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 0, 0, -30, 60, -30, -0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 0, 1, -30, 60, -30, -0.5773502588272095, 0.5773502588272095, -0.5773502588272095, 0, 0, -30, 60, 30, -0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 0, 1, -30, 60, 30, -0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 0, 1, -30, 60, 30, -0.5773502588272095, 0.5773502588272095, 0.5773502588272095, 0, 0 ],
            "parts": [
                {
                    "id": "geosetpart_0",
                    "type": "TRIANGLES",
                    "indices": [ 0, 6, 9, 9, 3, 0, 12, 15, 21, 21, 18, 12, 1, 4, 16, 16, 13, 1, 5, 10, 22, 22, 17, 5, 11, 7, 19, 19, 23, 11, 8, 2, 14, 14, 20, 8 ]
                }
            ]
        }
    ],
    "materials": [
        {
            "id": "Material_0",
            "ambient": [ 0, 0, 0 ],
            "diffuse": [ 0, 0, 0 ],
            "emissive": [ 0, 0, 0 ],
            "opacity": 0,
            "specular": [ 0, 0, 0 ],
            "shininess": 0,
            "textures": [
                {
                    "id": "Texture_0",
                    "filename": "/home/karesz/pepe.jpg",
                    "type": "DIFFUSE"
                }
            ]
        }
    ],
    "nodes": [
        {}
    ]
    }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    const provider = new War3ViewerContentProvider(context);
    let registration = vscode.workspace.registerTextDocumentContentProvider('war3-provider', provider);

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.war3View', () => {
        // The code you place here will be executed every time your command is executed
        let uri = Uri.parse('war3-provider://bubu');
        // Display a message box to the user
        vscode.window.showInformationMessage('You just got trikt');
        return vscode.commands.executeCommand('vscode.previewHtml', uri, ViewColumn.Two, 'War3 Viewer')
        .then((success) => console.log('Success is a bitch', success), (error) => console.log('Error', error))
    });

    context.subscriptions.push(disposable);
}

class War3ViewerContentProvider implements TextDocumentContentProvider {
    private context: ExtensionContext;

    constructor(context: ExtensionContext) {
        this.context = context;
    }
    
    public provideTextDocumentContent(uri: Uri): string {
        // const model = vscode.window.activeTextEditor.document.getText();
        console.log('rw', this.context.asAbsolutePath(path.join('resources', 'three.min.js')));
        const model = processSource(source);
        console.log(JSON.stringify(model, null, 2));
        return `<html>
        <head>
            <title>My first three.js app</title>
            <style>
                body { margin: 0; }
                canvas { width: 100%; height: 100%; display: block; }
            </style>
        </head>
        <body>
            <script src="file:///${this.context.asAbsolutePath(path.join('resources', 'three.min.js'))}"></script>
            ${source}
            <script>
                var scene = new THREE.Scene();
                var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        
                var renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                document.body.appendChild( renderer.domElement );

                var geometry = new THREE.Geometry();
                geometry.vertices.push(
                    ${model[0].verticles.map((vert) => `new THREE.Vector3( ${vert[0]}, ${vert[1]}, ${vert[2]} )`).join(', ')}
                );
                geometry.faces.push( 
                    ${model[0].faces.map((face) => `new THREE.Face3( ${face[0]}, ${face[1]}, ${face[2]} )`).join(', ')}
                );
                var geometryCube = new THREE.BoxGeometry( 1, 1, 1 );
                var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                var material2 = new THREE.MeshBasicMaterial( { color: 0xffcc00 } );
                var cube = new THREE.Mesh( geometryCube, material );
                var cube2 = new THREE.Mesh( geometry, material2 );
                scene.add( cube2, cube );
        
                camera.position.z = 5;
        
                var animate = function () {
                    requestAnimationFrame( animate );
        
                    cube.rotation.x += 0.1;
                    cube.rotation.y += 0.1;
        
                    renderer.render(scene, camera);
                };
        
                animate();
            </script>
        </body>
        </html>`;
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function processSource(sourceJson) {
    return sourceJson.meshes.map((mesh) => {
        console.log(mesh);
        const verticles = [];
        for(let i = 0; i < mesh['vertices'].length; i++) {
            const current = mesh['vertices'][i];
            const index = Math.floor(i/3);
            console.log('verti', index);
            verticles[index] = verticles[index] ? [...verticles[index], current] : [current];
        }

        const faces = []
        const indices = mesh['parts'][0]['indices']
        for(let i = 0; i < indices.length; i++) {
            const current = indices[i];
            const index = Math.floor(i/3);
            console.log('face', index);
            faces[index] = faces[index] ? [...faces[index], current] : [current];
        }
        return { verticles, faces };
    });
}