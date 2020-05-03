# Chuck Norris

Example .NET Core 3.1/ Angular 8 Application making use of the chucknorris.io API

# Bootstrapping
## Development Setup
The solution is compatible with Visual Studio and Jetbrains Rider. IIS Express, Kestrel server or Docker can be used.

## Docker setup
For a stand-alone test container deployement.
- Execute docker build command (Run command in context of dockerfile next to .gitignore)
- Example:
```powershell
docker build . -t chucknorris
```
- Execute docker run command
- Example:
```
docker run 8090:80 chucknorris
```
