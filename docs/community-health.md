# Community Health

Based on the needs and purpose of different projects and repositories, it is
advisable to look through [GitHub's Community Health Files
Guidance][gh-community-health] to determine which files are necessary for the
project. Organisation-level community health files may also be used where
relevant.

Additionally, this document describes some of the files that we use in our
projects.

[gh-community-health]:
  https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file

## 1. Labels

See the following resources for advice and guidance:

- <https://rewind.com/blog/best-practices-for-using-github-issues/>
- <https://seantrane.com/posts/logical-colorful-github-labels-18230/>
- <https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63>

## 2. Additional Community Health Files

### 2.1. `ACKNOWLEDGEMENTS.md`

We include an `ACKNOWLEDGEMENTS.md` file in the root of each project to
acknowledge the contributions of others, and to provide a list of sources of
inspiration and guidance that aren't otherwise clear in the project.

```markdown
# Acknowledgements

## Sources

- [general source][] for a reason.

[general source]: https://example.com

### Source Categorisation

- [another source][] for another reason.

[another source]: https://example.com

## Resources

- [general resource][] for a reason.

[general resource]: https://example.com

### Resource Categorisation

- [another resource][] for another reason.

[another resource]: https://example.com
```
